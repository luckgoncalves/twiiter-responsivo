import React from 'react';
import StickBox from 'react-sticky-box';

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twiiter" />
        <SearchIcon />
      </SearchWrapper>
      <StickBox>
        <Body>
          <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion
              name="Lucas"
              nickname="@lucas"/>,
            <FollowSuggestion
              name="Lucas"
              nickname="@lucas"/>,
            <FollowSuggestion
              name="Lucas"
              nickname="@lucas"/>,
          ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />

        </Body>
      </StickBox>
    </Container>
  );
}

export default SideBar;