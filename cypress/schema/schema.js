export const userSignIn = `mutation auth($signInData: SignInData!)  {
		signIn(input: $signInData)
{
		 __typename
		  ... on PreMFA {
			type
		  }
		  ... on Session{
			token
			user {
			  features
			  invitationCode
			  mobileNumber
			  personalInfo
			  referralCode
			  suitabilitySurvey
			  userId
			}
		  }
		}
	  }`;

export const query = `{
	bankAccounts {
	accountName
	bankCode
	isVerified
	}
  }`;

export const updatePreferredLanguage = `mutation updatePreferredLanguage($language: String!) {
	updatePreferredLanguage(language: $language)
  }`;
