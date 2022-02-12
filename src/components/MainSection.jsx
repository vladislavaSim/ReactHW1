import React from 'react';
import Input from "./Input";
import Link from "./Link";

const MainSection = () => {
    return (
        <div className='main-section'>
            <img src='https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' className='logo'/>
            <Input />
           <div className='link-holder'>
               <Link text={'Поиск в Google'}/>
               <Link text={'Мне повезёт!'}/>
           </div>
            <p className='info-text'>Сервисы Google доступны на этих языках:
                <Link text={'українська'} />
            </p>
        </div>
    );
};

export default MainSection;