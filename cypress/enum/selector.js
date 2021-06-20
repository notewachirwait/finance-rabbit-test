/**
 * Enum for element selector
 * @readonly
 * @enum {String}
 */
 export default Object.freeze({
    IPD_LABEL: '[for="product_category-ipdOpd"]',
    SALARYMAN_LABEL:'[for="product_ipdopd_subcategory-salaryMan"]',
    INPUT_PHONE_NUMBER:'[name="customer_phone"]',
    BUTTON_NEXT_PHONE_NUMBER:'#customer_phone > :nth-child(2) > .col-12 > .btn',
    INPUT_FIRST_NAME:'[name="customer_first_name"]',
    INPUT_LAST_NAME:'[name="customer_last_name"]',
    BUTTON_NEXT_NAME:':nth-child(3) > .col-12 > .btn',
    INPUT_EMAIL:'[name="customer_email"]',
    BUTTON_GENDER_MALE:'[for="customer_gender-M"]',
    INPUT_DATE:'[name="customer_dob"]',
    BUTTON_NEXT_DATE:'#customer_dob > :nth-child(2) > .col-12 > .btn',
    CONSENT:'[for="tc-1"]',
    BUTTON_CONFIRM_CONSENT:'[id="btn-marketing-consent"]',
    BUTTON_APPLY:'.col-3.px-1',
    DROP_DOWN_HEALTH_CATEGORY:'[id="health-category"]',
    DROP_DOWN_TYPE:'.form-control.form-control-sm',

    BUTTON_DISEASE:'[for="product_category-disease"]',
    BUTTON_OFFICE_SYDROME:'[for="product_disease_subcategory-officialSyndrome"]',

    BUTTON_PA:'[for="product_category-pa"]',
    BUTTON_EXTREME_SPORT:'[for="product_accident_subcategory-extremeSportAccidents"]',
});
