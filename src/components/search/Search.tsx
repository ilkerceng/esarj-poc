import { Input } from 'antd';
import { SearchProps as DefaultSearchProps } from 'antd/es/input';

export type SearchProps = DefaultSearchProps;

export const Search = (props: SearchProps) => {
  return <Input allowClear {...props} />;
};
