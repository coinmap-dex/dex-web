import React from 'react'
import S from './styled'
import {
	widget,
	ChartingLibraryWidgetOptions,
	LanguageCode,
	IChartingLibraryWidget,
	ResolutionString,
} from './charting_library';
import { connect } from 'react-redux';
import { isMobileScreen } from '~utils/screen.util';
import {LOCAL_STORAGE} from '../../../../constants/local-storage.constants';

export interface ChartContainerProps {
	symbol: ChartingLibraryWidgetOptions['symbol'];
	// BEWARE: no trailing slash is expected in feed URL
	datafeedUrl: string;
	libraryPath: ChartingLibraryWidgetOptions['library_path'];
	chartsStorageUrl: ChartingLibraryWidgetOptions['charts_storage_url'];
	chartsStorageApiVersion: ChartingLibraryWidgetOptions['charts_storage_api_version'];
	clientId: ChartingLibraryWidgetOptions['client_id'];
	userId: ChartingLibraryWidgetOptions['user_id'];
	fullscreen: ChartingLibraryWidgetOptions['fullscreen'];
	autosize: ChartingLibraryWidgetOptions['autosize'];
	studiesOverrides: ChartingLibraryWidgetOptions['studies_overrides'];
	container: ChartingLibraryWidgetOptions['container'];
}

export interface ChartContainerState {
	tvWidget: IChartingLibraryWidget | null;
}

function getLanguageFromURL(): LanguageCode | null {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' ')) as LanguageCode;
}

const addCheckApiButton = (tvWidget: IChartingLibraryWidget) => {
	tvWidget.headerReady().then(() => {
		const button = tvWidget.createButton();
		button.setAttribute('title', 'Click to show a notification popup');
		button.classList.add('apply-common-tooltip');
		button.addEventListener('click', () => tvWidget.showNoticeDialog({
			title: 'Notification',
			body: 'TradingView Charting Library API works correctly',
			callback: () => {
				console.log('Noticed!');
			},
		}));
		button.innerHTML = 'Check API';
	});
}

const trackChartIntervalChange = (tvWidget: IChartingLibraryWidget) => {
	tvWidget.activeChart().onIntervalChanged().subscribe(null, (interval) => {
		localStorage.setItem(LOCAL_STORAGE.CHART_INTERVAL, interval);
	});
}

const customTimezone = (tvWidget: IChartingLibraryWidget) => {
	tvWidget.activeChart().setTimezone('Asia/Ho_Chi_Minh');
}

const DEFAULT_SYMBOL = '0x4556a6f454f15c4cd57167a62bda65a6be325d1f~0';
const DEFAULT_INTERVAL = '15';

const getInterval = () => (
	localStorage.getItem(LOCAL_STORAGE.CHART_INTERVAL)
	|| DEFAULT_INTERVAL
) as ChartingLibraryWidgetOptions['interval'];

class TVChartContainer extends React.PureComponent<Partial<ChartContainerProps>, ChartContainerState> {
	constructor(props) {
		super(props);
		this.state = { tvWidget: null };
	}

	static defaultProps: Omit<ChartContainerProps, 'container'> = {
		// symbol: 'AAPL',
		symbol: DEFAULT_SYMBOL,
		// datafeedUrl: 'https://demo-feed-data.tradingview.com',
		datafeedUrl: 'https://api.dextrading.io/api/v1/tradingview',
		// datafeedUrl: 'http://localhost:3000/tradingview',	
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
	};

	private ref: React.RefObject<HTMLDivElement> = React.createRef();

	componentDidMount(): void {
		if (!this.ref.current) {
			return;
		}

		const hideLeftToolbarByDefaultFeature = isMobileScreen() ? 'hide_left_toolbar_by_default' : '';

		const widgetOptions: ChartingLibraryWidgetOptions = {
			symbol: this.props.symbol,
			// BEWARE: no trailing slash is expected in feed URL
			// tslint:disable-next-line:no-any
			datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(this.props.datafeedUrl),
			interval: getInterval(),
			container: this.ref.current,
			library_path: this.props.libraryPath as string,

			locale: getLanguageFromURL() || 'en',
			disabled_features: [
				'use_localstorage_for_settings',
				"save_chart_properties_to_local_storage",
				"chart_crosshair_menu",
				"order_panel",
				"trading_account_manager",
				'save_chart_properties_to_local_storage',
				'pay_attention_to_ticker_not_symbol',
				'always_pass_called_order_to_modify',
				'show_object_tree',
				'header_symbol_search',
			],
			enabled_features: [hideLeftToolbarByDefaultFeature],
			charts_storage_url: this.props.chartsStorageUrl,
			charts_storage_api_version: this.props.chartsStorageApiVersion,
			client_id: this.props.clientId,
			user_id: this.props.userId,
			fullscreen: this.props.fullscreen,
			autosize: this.props.autosize,
			// studies_overrides: this.props.studiesOverrides,
			theme: 'Dark',
			overrides: {
				'paneProperties.background': '#0F1A30',
				'paneProperties.backgroundType': 'solid'
			},
			loading_screen: { backgroundColor: '#0F1A30' },
			custom_css_url: '../css/chart-themed.css',
			load_last_chart: false,
		};

		const tvWidget = new widget(widgetOptions);

		tvWidget.onChartReady(() => {
			addCheckApiButton(tvWidget);
			trackChartIntervalChange(tvWidget);
			customTimezone(tvWidget);
		});

		this.setState({ tvWidget });
	}

	componentDidUpdate(prevProps: Readonly<Partial<ChartContainerProps>>) {
		if (this.props?.symbol !== prevProps?.symbol) {
			if (!!this.state.tvWidget) {
				this.state.tvWidget.setSymbol(
					this.props?.symbol ?? DEFAULT_SYMBOL,
					getInterval(),
					() => {
						console.log('updated symbol', this.props?.symbol ?? DEFAULT_SYMBOL)
					}
				);
			}
		}
	}

	componentWillUnmount(): void {
		if (this.state.tvWidget !== null) {
			this.state.tvWidget.remove();
			this.setState({ tvWidget: null });
		}
	}

	render(): JSX.Element {
		return (
			<S.Wrapper
				ref={this.ref}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	symbol: `${state?.home?.contract}~0` ?? DEFAULT_SYMBOL
});

export default connect(
	mapStateToProps
)(TVChartContainer as any);
