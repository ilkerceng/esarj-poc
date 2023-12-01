import { Card, CardProps, Col, Row, Space } from 'antd';
import { ReactNode } from 'react';

export const UserManagementView = (props: {
  TableComponent: ReactNode;
  SearchComponent: ReactNode;
  RecordDetailComponent: ReactNode;
  cardProps: CardProps;
}) => {
  const { RecordDetailComponent, SearchComponent, TableComponent, cardProps } =
    props;
  return (
    <Row gutter={16}>
      <Col span={RecordDetailComponent ? 10 : 24}>
        <Card {...cardProps}>
          <Space direction="vertical" className="w-full">
            {SearchComponent}
            {TableComponent}
          </Space>
        </Card>
      </Col>
      {RecordDetailComponent ? (
        <Col span={14}>{RecordDetailComponent}</Col>
      ) : null}
    </Row>
  );
};
