import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        { id: '1', text: 'comment 1', user: { id: '1', username: 'username' } },
        { id: '2', text: 'comment 2', user: { id: '1', username: 'username' } },
        { id: '3', text: 'comment 2', user: { id: '1', username: 'username' } }
    ]
};

export const NoComments = Template.bind({});
NoComments.args = {
    comments: []
};