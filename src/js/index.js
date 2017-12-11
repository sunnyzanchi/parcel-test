import '../scss/index.scss';
import { format } from 'date-fns';

const title = document.querySelector('h1');
title.innerText = format(new Date(), '[Today is] MMMM Do');
