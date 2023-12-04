import { Card, CardProps, Col, Grid, Row, Space } from 'antd';
import { ReactNode } from 'react';

const { useBreakpoint } = Grid;

/**
 * Layout for search list and item detail 
 */
export const UserManagementView = (props: {
  TableComponent: ReactNode;
  SearchComponent: ReactNode;
  RecordDetailComponent?: ReactNode;
  cardProps: CardProps;
}) => {
  const { RecordDetailComponent, SearchComponent, TableComponent, cardProps } =
    props;
  const screens = useBreakpoint();
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
