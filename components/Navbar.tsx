'use client'

import './Navbar.css'

import { Menu , Col , Row , Space , Button , Tooltip , Input } from 'antd';

const { Search } = Input;

import { GithubOutlined, CloudOutlined, CaretDownOutlined } from '@ant-design/icons';

// items
const NavbarItems = [
  {
    label: 'New Movies',
    key: 'new',
  },
  {
    label: <>Movie ranking <CaretDownOutlined /></>,
    key: 'RankingSubMenu',
    
    children: [
      {
        type: 'item',
        label: 'Most watched',
        key: 'ranking:1'
      },
      {
        type: 'item',
        label: 'Best rating',
        key: 'ranking:2'
      },
    ],
  },
  {
    label: <>Categories <CaretDownOutlined /></>,
    key: 'CategorySubMenu',
    children: [
      {
        type: 'item',
        label: 'Category 1',
        key: 'category:1'
      },
      {
        type: 'item',
        label: 'Category 2',
        key: 'category:2'
      },
      {
        type: 'item',
        label: 'Category 3',
        key: 'category:3'
      },
      {
        type: 'item',
        label: 'Category 4',
        key: 'category:4'
      },
      {
        type: 'item',
        label: 'Category 5',
        key: 'category:5'
      },
      {
        type: 'item',
        label: 'Category 6',
        key: 'category:6'
      },
    ],
  },
];
//

const onSearch = (value: string) => console.log(value);

function Navbar() {

  return (
    <>
        <div className="Navbar">
            <Row>
              <Col flex="180px">            
                <div className="Logo"><a href=""><img src="./img/logo.png" alt="MoviesApp"  width={200} height={60}/></a></div>
              </Col>
              <Col flex="auto">            
                <Menu className="Menu" theme="dark" mode="horizontal" items={NavbarItems} ></Menu>
              </Col>
              <Col flex="340px">
                <div className="SearchBar">
                  <Search
                    placeholder="Search for your movie"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                    style={{paddingTop: '10px', border: 'none'}}
                  />
                  <div className="SearchResults"></div>
                </div>
              </Col>
              <Col flex="120px">
                <Space style={{ height:'60px', lineHeight:'60px', float: 'right'}} wrap>
                  <Tooltip title="GitHub">
                    <Button type="default" icon={<GithubOutlined />} size={'large'} />
                  </Tooltip>
                  <Tooltip title="Website">
                    <Button type="default" icon={<CloudOutlined />} size={'large'} />
                  </Tooltip>
                </Space>
              </Col>
            </Row>

            

        </div>
    </>
  )
}

export default Navbar
