import React from 'react'
import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default () => {
  useEffect(() => {
    navigate('/best/makeup');
  }, []);
  return null;
};

