import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Text, {TextTheme} from "shared/ui/Text/Text";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'lorem title',
    text: "Loooooooooooooooooooooong description"
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'lorem title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: "Loooooooooooooooooooooong description"
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'lorem title',
    text: "Loooooooooooooooooooooong description"
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'lorem title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: "Loooooooooooooooooooooong description"
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({});
Error.args = {
    title: 'lorem title',
    text: "Loooooooooooooooooooooong description",
    theme: TextTheme.ERROR
};
