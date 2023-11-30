import { Card, Col, Row, Space, Table, TableProps } from 'antd';
import { PropsWithChildren, ReactNode } from 'react';

export const UserManagementView = (props: {
  TableComponent: ReactNode;
  SearchComponent: ReactNode;
  RecordDetailComponent: ReactNode;
}) => {
  const { RecordDetailComponent, SearchComponent, TableComponent } = props;
  return (
    <Row gutter={16}>
      <Col span={RecordDetailComponent ? 14 : 24}>
        <Card>
          <Space direction="vertical" className="w-full">
            {SearchComponent}
            {TableComponent}
          </Space>
        </Card>
      </Col>
      {RecordDetailComponent ? (
        <Col span={10}>{RecordDetailComponent}</Col>
      ) : null}
    </Row>
  );
};
