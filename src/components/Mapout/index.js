import React, { Component } from 'react';

import portfolio from '../../portfolio.json'


export default {

    projectsMapOne: function () {
        portfolio.map(portfolio => {
            if (portfolio.id < 4) {
                return portfolio;
            }
        })
    },

    projectsMapTwo: function () {
        portfolio.map(portfolio => {
            if (portfolio.id > 3) {
                return portfolio;
            }
        })
    }





}

