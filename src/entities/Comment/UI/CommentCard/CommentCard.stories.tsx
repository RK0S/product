import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comment: { id: '1', text: 'comment 1', user: { id: '1', username: 'username' } }
};

export const Dark = Template.bind({});
Dark.args = {
    comment: { id: '1', text: 'comment 1', user: { id: '1', username: 'username' } }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const isLoading = Template.bind({});
isLoading.args = {
    comment: { id: '1', text: 'comment 1', user: { id: '1', username: 'username' } },
    isLoading: true
};
