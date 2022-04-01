import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import { FirebaseContext } from '../context/firebase';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';


export function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('matches');
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState({});

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);

    return profile.displayName ? (
        <>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : (
                <Loading.ReleaseBody />
            )}

            <Header src="facup2021" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="XtraTime" />
                        <Header.TextLink active={category === 'matches' ? 'true' : 'false'} onClick={() => setCategory('matches')}>Matches</Header.TextLink>
                        <Header.TextLink active={category === 'highlights' ? 'true' : 'false'} onClick={() => setCategory('highlights')}>Highlights</Header.TextLink>
                        <Header.TextLink active={category === 'facup' ? 'true' : 'false'} onClick={() => setCategory('facup')}>FA Cup</Header.TextLink>
                        <Header.TextLink active={category === 'worldcup' ? 'true' : 'false'} onClick={() => setCategory('worldcup')}>World Cup</Header.TextLink>
                        <Header.TextLink active={category === 'communityshield' ? 'true' : 'false'} onClick={() => setCategory('communityshield')}>FA Community Shield</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallout style={{ fontFamily: "Century Gothic" }}>Watch the 2020-21 FA Cup Final Now</Header.FeatureCallout>
                    <Header.Text>
                        The 140th FA Cup Final, played between Chelsea and Leicester City at Wembley Stadium, London, England on 15 May 2021.
                        An official attendance of 20,000 due to the COVID-19 pandemic in England. Michael Oliver was the referee, assisted by
                        Stuart Burt and Simon Bennett. Stuart Attwell was the fourth official. This was Chelsea's fifteenth FA Cup Final
                        apprearance and fourth in the last five seasons, winning one. Leicester City had appeared in four Finals prior to 2021,
                        losing them all.
                    </Header.Text>
                    <Player>
                        <Player.Button />
                        <Player.Video src={"https://rr4---sn-5hne6nzs.googlevideo.com/videoplayback?expire=1648760043&ei=i8BFYtbmHI6rxN8PzN-U6AU&ip=80.1.41.204&id=o-AEmr9jZV4pdWUHOCBREtYKvvaCBJuRJwVERf8GqfBOu-&itag=22&source=youtube&requiressl=yes&spc=4ocVC6PMod6ztd4P5lln51ROGf0k&vprv=1&mime=video%2Fmp4&ns=8bPyZyc8wg1-X8L8Yw-9s20G&cnr=14&ratebypass=yes&dur=6041.298&lmt=1637455184750195&fexp=24001373,24007246,24162928&c=WEB&txp=5432434&n=DEgrmWSBJnrWDq3WWY3&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAKgdsUXnvEiWFL7HvSPeI2MBn2_hQCYeNZmXQzBpH8IWAiBUILT-kM3C6eqP2o72anmy11cAUSvW3isy8Am_nDFl6w%3D%3D&cm2rm=sn-8pgbpohxqp5-auod7s,sn-aigesr7s&req_id=51b7c97b6e62a3ee&ipbypass=yes&redirect_counter=2&cms_redirect=yes&cmsv=e&mh=FJ&mm=34&mn=sn-5hne6nzs&ms=ltu&mt=1648738354&mv=m&mvi=4&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAMIzuuWkhI50o-d1kpgjDICnnDLe59Zy8HAUoUFh6HaCAiAJ-ZRcOp3ib5JvqFlEuedEJnFuvNFphF_skoBIRT3aTw%3D%3D"} />
                    </Player>
                </Header.Feature>
            </Header>


            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src="/videos/2021-efl-championship-final.mp4" />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
            <FooterContainer />
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}