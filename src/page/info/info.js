import React from 'react';
import './info.style.css';

import peaky from './peaky.jpeg';
import kevin from './kevin spacy.jpg';
import john from './john.jpg';

import Card from '../../components/card/card';

const Info =()=> (
    <div dir='rtl' className='info-class'>
        <p className='group-name'>گروه The Outlaw DevOps</p>
        <p>اعضا :</p>
        <div className='members'>
            <Card key='member1' url='#' srcs={john} name='علیرضا گل افشان'/>
            <Card key='member2' url='#' srcs={kevin} name='احسان رهبری' />
            <Card key='member3' url='#' srcs={peaky} name='امیر حسین دهقان' />
        </div>
        <p>با تشکر از :</p>
        <p>دکتر سلیمی</p>

    </div>
);

export default Info ;