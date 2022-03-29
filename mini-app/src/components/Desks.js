import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Button } from "@vkontakte/vkui";
const Desks = ({ onChangePanel}) => {
    return (
        <Fragment>
            <div>Привет, я панель с досками</div>
			<Button onClick={onChangePanel}>Перейти к колонкам</Button>
        </Fragment>
    );
};
Desks.propTypes = {
    onChangePanel: PropTypes.func.isRequired
};
export default Desks;