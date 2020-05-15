/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default function Repository({ route }) {
    const {
        repository: { html_url },
    } = route.params;

    return <WebView source={{ uri: `${html_url}` }} />;
}

Repository.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.object,
    }).isRequired,
};
