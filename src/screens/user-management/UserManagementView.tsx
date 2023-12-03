import { Card, CardProps, Col, Row, Space, Grid, Divider } from 'antd';
import { ReactNode } from 'react';

const { useBreakpoint } = Grid;

export const UserManagementView = (props: {
  TableComponent: ReactNode;
  SearchComponent: ReactNode;
  RecordDetailComponent: ReactNode;
  cardProps: CardProps;
}) => {
  const { RecordDetailComponent, SearchComponent, TableComponent, cardProps } =
    props;
  const screens = useBreakpoint();
  console.log(screens);
  const isDesktopView = screens.lg;

  return (
    <Row gutter={16}>
      <Col span={!isDesktopView || !RecordDetailComponent ? 24 : 10}>
        <Card {...cardProps}>
          <Space direction="vertical" className="w-full">
            {SearchComponent}
            {TableComponent}
          </Space>
        </Card>
      </Col>
      {!isDesktopView && <div className='mt-2 w-2' />}
      {RecordDetailComponent ? (
        <Col span={isDesktopView ? 14 : 24}>{RecordDetailComponent}</Col>
      ) : null}
    </Row>
  );
};
