
export type MetricData = {
  unit: string;
  definition: string;
  formula: string;
  sql_formula: string;
};

const metricData: Record<string, MetricData> = {
  sales: {
    unit: "$",
    definition: "Sales in dollars",
    formula: "average_retail_price * weekly_velocity * distribution",
    sql_formula: "SUM(sales_dollar)"
  },
  average_retail_price: {
    unit: "$",
    definition: "Average product price",
    formula: "total sales in dollars / total units sold",
    sql_formula: "SUM(sales_dollar)/SUM(sales_units)"
  },
  non_promoted_retail_price: {
    unit: "$",
    definition: "Average product price with no discounts",
    formula: "sales in dollar for non-promoted products / units sold for non-promoted products",
    sql_formula: "SUM(sales_dollar_without_promo)/SUM(sales_units_without_promo)"
  },
  discount_depth: {
    unit: "%",
    definition: "How much is the effect of the applied discount",
    formula: "(non-promoted price - promoted price) / non-promoted price",
    sql_formula: "100*((SUM(sales_dollar_without_promo)/SUM(sales_units_without_promo)) - (SUM(sales_dollar_with_any_promo)/(SUM(sales_units)-SUM(sales_units_without_promo)))) / (SUM(sales_dollar_without_promo)/SUM(sales_units_without_promo))"
  },
  promo_units: {
    unit: "%",
    definition: "Ratio of how many products were promoted vs the total products",
    formula: "sales promoted units / total number sales",
    sql_formula: "100*SUM(sales_units_with_any_promo)/SUM(sales_units)"
  },
  promo_units_with_FD: {
    unit: "%",
    definition: "Percentage of units featured and displayed",
    formula:'',
    sql_formula: "100*SUM(sales_units_with_feature_and_display)/SUM(sales_units)"
  },
promo_units_with_only_D: {
    unit: "%",
    definition: "Percentage of units only displayed",
    formula:'',
    sql_formula: "100*SUM(sales_units_with_only_display)/SUM(sales_units)"
  },
promo_units_with_only_F: {
    unit: "%",
    definition: "Percentage of units only featured",
    formula:'',
    sql_formula: "100*SUM(sales_units_with_only_feature)/SUM(sales_units)"
  },
promo_units_with_price_decrease: {
    unit: "%",
    definition: "Percentage of units with price decrease",
    formula:'',
    sql_formula: "100*SUM(sales_units_with_price_decrease)/SUM(sales_units)"
  },
weekly_velocity: {
unit: "units / weekly TDP",
definition: "The selling speed by period",
formula: "sold units * week / TDP",
sql_formula: "SUM(sales_units) / SUM(tdp)"
},
non_promo_velocity: {
unit: "units / TDP",
definition: "The speed of sales for items without discounts",
formula: "non-promoted units / TDPs",
sql_formula: "SUM(sales_units_without_promo)/(SUM(tdp) - SUM(tdp_with_any_promo))"
},
promo_tdps: {
unit: "%",
definition: "Promoted products TDP ratio",
formula: "promo TDPs / TDPs",
sql_formula: "100*SUM(tdp_with_any_promo)/SUM(tdp)"
},
promo_velocity: {
unit: "units / TDP",
definition: "The speed of sales for items with promotions",
formula: "number of units / promo TDPs",
sql_formula: "SUM(sales_units_with_any_promo) / SUM(tdp_with_any_promo)"
},
promo_velocity_with_FD: {
    unit: "units / TDP",
    definition: "The speed of sales for items featured and displays",
    formula:'',
    sql_formula: "SUM(sales_units_with_feature_and_display)/SUM(tdp_with_feature_and_display)"
  },
promo_velocity_with_only_D: {
    unit: "units / TDP",
    definition: "The speed of sales for items with only display promotions",
    formula:'',
    sql_formula: "SUM(sales_units_with_only_display)/SUM(tdp_with_only_display)"
  },
promo_velocity_with_only_F: {
    unit: "units / TDP",
    definition: "The speed of sales for items with only featured promotions",
    formula:'',
    sql_formula: "SUM(sales_units_with_only_feature)/SUM(tdp_with_only_feature)"
  },
promo_velocity_with_price_decrease: {
    unit: "units / TDP",
    definition: "Percentage of tdp with price decrease",
    formula:'',
    sql_formula: "SUM(sales_units_with_price_decrease)/SUM(tdp_with_price_decrease)"
  },
distribution: {
unit: "TDPs",
definition: "Total distribution points by week",
formula: "TDP / week",
sql_formula: "SUM(tdp) / COUNT(DISTINCT period_date)"
},
units: {
  unit: "units",
  definition: "Amount of sales in units",
  formula: "weekly_velocity * distribution",
    sql_formula: "SUM(sales_units)"
}

};

export default metricData;
