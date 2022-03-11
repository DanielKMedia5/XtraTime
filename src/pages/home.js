import React from 'react';
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
                    <Feature.Title style={{ fontFamily: "Coolvetica" }}>“What a goal, at what a time, in what a place, what a player.” - Peter Drury</Feature.Title>
                    <Feature.SubTitle>Watch XtraTime anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text style={{ color: "white" }}>Ready to jump into the action? Enter your email to create or restart your membership.</OptForm.Text>
                </OptForm>
                </Feature>
               
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />

        </>
    );
}