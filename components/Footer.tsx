import './Footer.css'

import { Menu , Col , Row , Space , Button , Tooltip , Input } from 'antd';
import { GithubOutlined, CloudOutlined, CaretDownOutlined } from '@ant-design/icons';
import Link from 'next/link';

function Footer() {

  return (
    <>
        <div className="Footer">
            <div className="container">
              <span>{"MoviesApp Project by "}<a href="">Rafał Michałuszek (rmichaluszek)</a>{" | 2023"}</span>
            </div> 
        </div>
    </>
  )
}

export default Footer
