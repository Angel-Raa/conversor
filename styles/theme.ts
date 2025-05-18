import { DefaultTheme } from 'styled-components/native';

export const lightTheme: DefaultTheme = {
    colors: {
        background: '#FFFFFF',
        text: '#222222',
        primary: '#1976D2',
        secondary: '#90CAF9',
        border: '#E0E0E0',
        card: '#F5F5F5',
        button: {
            background: '#1976D2',
            text: '#FFFFFF',
        },
    },
    font: {
        family: 'System',
        size: 16,
        weight: 'normal',
    },
    button: {
        borderRadius: 6,
        padding: 12,
    },
};

export const darkTheme: DefaultTheme = {
    colors: {
        background: '#121212',
        text: '#FFFFFF',
        primary: '#90CAF9',
        secondary: '#1976D2',
        border: '#333333',
        card: '#1E1E1E',
        button: {
            background: '#90CAF9',
            text: '#121212',
        },
    },
    font: {
        family: 'System',
        size: 16,
        weight: 'normal',
    },
    button: {
        borderRadius: 6,
        padding: 12,
    },
};