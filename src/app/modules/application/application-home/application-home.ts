import { Component } from '@angular/core';

@Component({
  selector: 'app-application-home',
  imports: [],
  templateUrl: './application-home.html',
  styleUrl: './application-home.scss'
})
export class ApplicationHome {
  apps = [
    {
      title: 'Get lottery result',
      description: `Get Lottery Result" is a user-friendly app designed to make checking Kerala lottery results effortless. It provides daily updates on all Kerala lottery draws, including daily and bumper lotteries. The app's key feature is its ability to help users filter tickets, saving time and effort. Instead of manually checking each number against the results list, users can easily input their ticket numbers to see if they've won. This convenient and intuitive app streamlines the process of checking lottery results, making it an essential tool for any Kerala lottery participant.`,
      shortDescription: `Tired of manually checking Kerala lottery results? Get Lottery Result is your solution. This user-friendly app provides daily updates for all Kerala lotteries. Simply enter your ticket numbers, and the app instantly checks for winners, saving you time and effort. It's the essential tool for any Kerala lottery participant.`,
      url: 'https://getlotteryresult.com'
    },
    {
      title: 'Moneyxpert',
      description: `MoneyXpert is a powerful and intuitive finance app designed to help you take control of your money. It allows you to effortlessly track your daily expenses and income, organizing them by customizable categories and accounts. The app provides insightful visualizations, presenting your financial data in clear, easy-to-understand charts and graphs for both monthly and yearly views. A standout feature is its comprehensive budget tool, which lets you set monthly and yearly budgets and track your spending against them. MoneyXpert also monitors budget performance for each category, generating detailed reports that empower you to make smarter financial decisions and achieve your monetary goals.`,
      shortDescription: `Take control of your finances with MoneyXpert, a powerful finance app. Easily track daily expenses and income, organize them with custom categories, and set budgets to reach your goals. The app presents your financial data in clear charts and graphs, helping you make smarter money decisions.`,
      url: 'https://money-xpert.com'
    },
    {
      title: 'Tradecalcu',
      description: `TradeCalcu is an essential tool for anyone involved in trading, providing a quick and easy way to perform a variety of financial calculations. Simply input an initial value and a change in amount, percentage, or profit and loss, and the app instantly calculates the corresponding differences. Whether you need to find the final value after a certain percentage increase, determine the profit or loss from a trade, or calculate the exact percentage change between two values, TradeCalcu delivers fast, accurate results. Its intuitive interface and focused functionality make it an indispensable app for traders and investors seeking to make swift, data-driven decisions.`,
      shortDescription: `For traders and investors,   TradeCalcu is the ultimate tool. Input an initial value and a change, and the app instantly calculates the final value, profit/loss, or percentage change. Its focused, intuitive design delivers fast and accurate results, helping you make quick, data-driven decisions.`,
      url: 'https://tradecalcu.netlify.app/'
    }
  ]

}
