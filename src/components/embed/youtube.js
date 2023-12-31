import React from "react"
import styled from 'styled-components'

const IframeContainer = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    iframe,  object, embed { 
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const YoutubeEmbed = (props) => {
    const {url} = props;

    return (

        <IframeContainer>
            <iframe src={url} frameborder='0' allowfullscreen></iframe>
        </IframeContainer>

  )

}

export default YoutubeEmbed;