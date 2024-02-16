import Badge from '@components/Badge';
import Button from '@components/Button';
import Icon from '@components/Icon';
import { CATEGORY_COLOR } from '@constants/config';
import type { Meta, StoryObj } from '@storybook/react';
import { COLORS } from '@styles/tokens';

import Card from '.';

const CARD_CONTENT = `안녕하세요. 리더님!
  어제 줌 회의로 가볍게 인사드렸는데 메신저로는 처음 인사 드립니다 :)
  다름이 아니라 업무 진행을 위해 JIRA 권한을 받고자 하는데 시간 괜찮으실 때 권한 추가해주실 수 있을까요?
`;

const CARD_COUNT_STYLE = {
  fontWeight: 500,
  fontSize: '14px',
  color: COLORS['Grey/500'],
};

const COMPONENT_DESCRIPTION = `
  - \`<Card />\`: 컴포넌트 내 모든 요소들의 레이아웃을 제공합니다.
  - \`<Card.Header />\`: Card 컴포넌트 내 상위 내용을 표시합니다.
  - \`<Card.Body />\`: Card 컴포넌트 내 내용을 표시합니다.
  - \`<Card.Footer />\`: Card 컴포넌트 내 하위 내용을 표시합니다. 
`;

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    componentSubtitle: '여러 요소들을 그룹화하는 컴포넌트',
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    color: 'blue',
  },
  render: (args) => (
    <Card color={args.color}>
      <Card.Header>Card.Header</Card.Header>
      <Card.Body>Card.Body</Card.Body>
      <Card.Footer>Card.Footer</Card.Footer>
    </Card>
  ),
};

export const WriteCard: Story = {
  args: {
    color: 'grey',
  },
  render: (args) => (
    <Card color={args.color}>
      <Card.Header>오후 8:23</Card.Header>
      <Card.Body>{CARD_CONTENT}</Card.Body>
    </Card>
  ),
};

export const TemplateCard: Story = {
  args: {
    color: 'white',
  },
  render: (args) => {
    return (
      <Card color={args.color}>
        <Card.Menu>
          <Button>
            <Icon icon="copy" />
          </Button>
          <Button>
            <Icon icon="menu" />
          </Button>
        </Card.Menu>
        <Card.Header>
          <Badge color={CATEGORY_COLOR['부탁하기']}>부탁하기</Badge>
          <Badge color="grey">퇴사/이직</Badge>
        </Card.Header>
        <Card.Body>{CARD_CONTENT}</Card.Body>
        <Card.Footer>
          복사 <span style={CARD_COUNT_STYLE}>1.2k</span> • 저장{' '}
          <span style={CARD_COUNT_STYLE}>200</span>
        </Card.Footer>
      </Card>
    );
  },
};

export const ArchivedWriteCard: Story = {
  args: {
    color: 'grey',
  },
  render: (args) => (
    <Card color={args.color}>
      <Card.Header>
        <Badge color="black">끄적이는</Badge>
      </Card.Header>
      <Card.Body>{CARD_CONTENT}</Card.Body>
    </Card>
  ),
};

export const ArchivedTemplateCard: Story = {
  args: {
    color: CATEGORY_COLOR['부탁하기'],
  },
  render: (args) => {
    return (
      <Card color={args.color}>
        <Card.Menu>
          <Button>
            <Icon icon="copy" />
          </Button>
          <Button>
            <Icon icon="menu" />
          </Button>
        </Card.Menu>
        <Card.Header>
          <Badge color="black">참고하는</Badge>
          <Badge color={CATEGORY_COLOR['부탁하기']}>부탁하기</Badge>
        </Card.Header>
        <Card.Body>{CARD_CONTENT}</Card.Body>
        <Card.Footer>
          복사 <span style={CARD_COUNT_STYLE}>1.2k</span> • 저장{' '}
          <span style={CARD_COUNT_STYLE}>200</span>
        </Card.Footer>
      </Card>
    );
  },
};
