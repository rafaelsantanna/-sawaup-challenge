import React from 'react';
import Head from 'next/head';
import Header from '../Header';

type Props = {
  title: string
  children: React.ReactNode
}

const MasterClass = ({ title, children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default MasterClass;
