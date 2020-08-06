import React from 'react';
import Aux from '../../../hoc/Aux';
import WorkImage from '../../../components/WorkEntry/WorkImage/WorkImage';
import SecondaryContent from '../../../components/Content/SecondaryContent/SecondaryContent'

const workSection (props) => (
    <Aux>
        <SecondaryContent />
        <WorkImage />
        <WorkImage />
        <SecondaryContent />

    </Aux>
)