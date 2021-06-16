import './App.css';
import React, {useState} from 'react';
import {MainPictureColumn, MainPictureRow, Heading, HeadingTwo} from './Components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faCheese} from '@fortawesome/free-solid-svg-icons';
import {faFish} from '@fortawesome/free-solid-svg-icons';
import {
    StyledPictureColumns,
    StyledMainPicture,
    StyledMain,
    StyledButton,
    StyledHeading,
    StyledHeadingTwo,
} from "./styles";


function App() {

    // js, set state, manipulate props
    const [picture, setPicture] = useState('')

    return (
        <StyledMain>
            {/*COLUMNS*/}
            <StyledPictureColumns>

                <StyledHeading><Heading/></StyledHeading>

                <StyledButton onClick={() => setPicture("FirstPicture")}>
                    <FontAwesomeIcon icon={faCoffee}/>
                </StyledButton>
                <StyledButton onClick={() => setPicture("SecondPicture")}>
                    <FontAwesomeIcon icon={faCheese} />
                </StyledButton>
                <StyledButton onClick={() => setPicture("ThirdPicture")}>
                    <FontAwesomeIcon icon={faFish}/>
                </StyledButton>
            </StyledPictureColumns>

            {/*MAIN ROW*/}
            <StyledMainPicture>
                <div style={{
                    position: 'absolute',
                    top: '50px',
                }}>
                    <StyledHeadingTwo><HeadingTwo/></StyledHeadingTwo>
                </div>
                {picture === "FirstPicture" &&
                <MainPictureColumn onClick={() => setPicture("FirstPicture")} title={'コーヒー'}
                                   icon={<FontAwesomeIcon icon={faCoffee} style={{fontSize:100}}/>}/>}

                {picture === "SecondPicture" &&
                <MainPictureColumn title={'チーズ'} icon={<FontAwesomeIcon icon={faCheese} style={{fontSize:100}}/>}/>}

                {picture === "ThirdPicture" && <MainPictureColumn title={'魚'} icon={<FontAwesomeIcon icon={faFish} style={{fontSize:100}}/>}/>}
            </StyledMainPicture>
        </StyledMain>
    );
}

export default App;
