/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
    Container,
    Header,
    Avatar,
    Name,
    Bio,
    Stars,
    Starred,
    OwnerAvatar,
    Info,
    Title,
    Author,
} from './styles';

export default class User extends Component {
    static propTypes = {
        route: PropTypes.shape({
            params: PropTypes.object,
        }).isRequired,
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    };

    state = {
        stars: [],
        page: 1,
        loading: true,
    };

    async componentDidMount() {
        this.load();
    }

    load = async (page = 1) => {
        const { stars } = this.state;
        const { route } = this.props;
        const user = route.params;

        const response = await api.get(`/users/${user.login}/starred`, {
            params: { page },
        });

        this.setState({
            stars: page >= 2 ? [...stars, ...response.data] : response.data,
            page,
            loading: false,
        });
    };

    loadMore = async () => {
        const { page } = this.state;

        const nextPage = page + 1;

        this.load(nextPage);
    };

    handleNavigate = (repository) => {
        const { navigation } = this.props;

        navigation.navigate('Repository', { repository });
    };

    render() {
        const { stars, loading } = this.state;

        const { route } = this.props;
        const user = route.params;

        return (
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>

                {loading ? (
                    <ActivityIndicator
                        color="#7159c1"
                        size={40}
                        style={{ marginTop: 200 }}
                    />
                ) : (
                    <Stars
                        onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
                        onEndReached={this.loadMore}
                        data={stars}
                        keyExtractor={(star) => String(star.id)}
                        renderItem={({ item }) => (
                            <Starred
                                onTouchStart={() => this.handleNavigate(item)}
                            >
                                <OwnerAvatar
                                    source={{ uri: item.owner.avatar_url }}
                                />
                                <Info>
                                    <Title>{item.name}</Title>
                                    <Author>{item.owner.login}</Author>
                                </Info>
                            </Starred>
                        )}
                    />
                )}
            </Container>
        );
    }
}
