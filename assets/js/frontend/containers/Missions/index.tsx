import React from "react";
import * as styled from "./styles";

const TilePageLinks = () => {
  return (
    <styled.Wrapper>
      <styled.TileWrapper>
        <styled.TileGap />
        <styled.Container>
          <styled.Tile>
            <styled.TileHeader>NEWS</styled.TileHeader>
            <styled.TileBody>
              Report any crime or suspicion and tip, help us catch the bad guys
              for you and protect you. Keep this place of ours free of thugs and
              gangs forever
            </styled.TileBody>
          </styled.Tile>
          <styled.Button>EXPLORE</styled.Button>
        </styled.Container>
        <styled.Container>
          <styled.Tile>NEWS</styled.Tile>
          <styled.Button>EXPLORE</styled.Button>
        </styled.Container>
      </styled.TileWrapper>
      <styled.TileWrapper>
        <styled.Container>
          <styled.Tile>NEWS</styled.Tile>
          <styled.Button>EXPLORE</styled.Button>
        </styled.Container>
        <styled.Container>
          <styled.Tile>NEWS</styled.Tile>
          <styled.Button>EXPLORE</styled.Button>
        </styled.Container>
        <styled.TileGap />
      </styled.TileWrapper>
    </styled.Wrapper>
  );
};

export default TilePageLinks;
