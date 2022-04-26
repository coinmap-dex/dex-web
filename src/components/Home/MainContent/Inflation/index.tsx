import React from 'react'
import { Col, Label, Table } from 'sezy-design'
import Arrow from 'sezy-design/components/icon/solid/arrow'
import _ from 'lodash';
import * as  S from './styled';
import * as MS from '../styled';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '~hooks';
import { useGetInflationQuery } from '~store/modules/home/api';

const Inflattion = () => {
    const { t } = useTranslation();
    const contract = useAppSelector(state => state.home.contract)
    const { data, isLoading, error } = useGetInflationQuery(contract);

    return <S.InflattionWrapper>
        <S.InflattionTitle>
            <Label>
                Inflationary
            </Label>
        </S.InflattionTitle>
        <S.InflattionNumber>{data?.rate || ''}</S.InflattionNumber>
        <S.InflattionButton>YES</S.InflattionButton>
    </S.InflattionWrapper>
}

export default Inflattion