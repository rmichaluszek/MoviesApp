'use client'

import './Navbar.css'

import { Menu , Col , Row , Space , Button , Tooltip , Input } from 'antd';
import { GithubOutlined, CloudOutlined, CaretDownOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Search } = Input;

// items
const NavbarItems = [
  {
    label: <Link href="/movies">
              New Movies
            </Link>,
    key: 'movies',
  },
  {
    label: <Link href="/ranking">Movie ranking <CaretDownOutlined /></Link>,
    key: 'ranking',
    
    children: [
      {
        type: 'item',
        label: <Link href="/ranking/most-watched">Most watched</Link>,
        key: 'ranking/most-watched'
      },
      {
        type: 'item',
        label: <Link href="/ranking/best-rating">Best rating</Link>,
        key: 'ranking/best-rating'
      },
    ],
  },
  {
    label: <Link href="/categories">Categories <CaretDownOutlined /></Link>,
    key: 'categories',
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

function Navbar({pathname}:{pathname:string}) {

  return (
    <>
        <div className="Navbar">
            <Row>
              <Col flex="160px">            
                <div className="Logo"><Link href="/"><img src="/img/logo.png" alt="MoviesApp"  width={150} height={45}/></Link></div>
              </Col>
              <Col flex="380px">            
                <Menu className="Menu" mode="horizontal" items={NavbarItems} selectedKeys={[pathname.substring(1,pathname.length)]}></Menu>
              </Col>
              <Col flex="auto" style={{display: 'flex', justifyContent: 'flex-end', marginLeft: '10px'}}>
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
              <Col flex="96px" >
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
