import React from 'react';
import * as ROUTES from '../constants/routes';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';


export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title style={{ fontFamily: "Century Gothic"}}>“What a goal, at what a time, in what a place, what a player.” - Peter Drury</Feature.Title>
                    <Feature.SubTitle>Watch XtraTime anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                    <OptForm.Button to={ROUTES.SIGN_UP}>Sign up now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text style={{ color: "#ebebeb" }}>Ready to jump into the action? Sign up to create or restart your membership for as little as £4.99.</OptForm.Text>
                </OptForm>
                </Feature>
               
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />

        </>
    );
}