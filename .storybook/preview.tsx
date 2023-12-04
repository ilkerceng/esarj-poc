import type { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleProvider } from '@ant-design/cssinjs';
import React from 'react';
import '../src/index.css';

const queryClient = new QueryClient();

const preview: Preview = {
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <QueryClientProvider client={queryClient}>
          <StyleProvider hashPriority="high">
            <Story />
          </StyleProvider>
        </QueryClientProvider>
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
