* **Name:** 
Ilya Prikazchikov
* **Contact Info:**
email: ilyaprikaz@gmail.com
telegram: @ilyaprikazchikov
* **About Me:** 
I'm the **pro**grammer you're looking for! 
My goal is to become a *Gold Star of Web-Development* and I'm really focused on it!
So if one day you come across a web-site or an app that works and looks perfectly you can be sure it was made by **me**!
* **My Skills:**
HTML, CSS, JavaScript, TypeScript, Node.js, Express.js, Git, SQL
* **Example of My Code:**
```
	/** Get product pictures by product_id */
	public async getImgByProductID(idProduct: number): Promise<string[]> {
		let asImage: string[] = null;
		try {
			const avImage = await this.db(${ItemE.NAME})
				.leftJoin(`${S3ItemImgE.NAME}`, `${ItemE.NAME}.item_id`, `${S3ItemImgE.NAME}.item_id`)
				.leftJoin(`${S3ItemFileE.NAME}`, `${S3ItemImgE.NAME}.s3_item_file_id`, `${S3ItemFileE.NAME}.id`)
				.where(`${ItemE.NAME}.product_id`, idProduct)
				.whereNotNull(`${S3ItemFileE.NAME}.source_url`)
				.distinct({ url: `${S3ItemFileE.NAME}.source_url` });
			// Array of Objects => Array of Strings
			asImage = avImage.map((el) => String(el.url));
		} catch (e) {
			this.errorSys.errorEx(e, 'ProductSQL.getImgByProductID', 'Could not get any images by requested data');
		}
		return asImage;
	}
```
* **Work Experience:**

| POSITION: | PLACE OF WORK: | PERIOD: | 
| ----------- | ----------- | ----------- |
| Back-End Web Developer | LLC "Nika", Russia | May 2021 - Now |
| Court Clerk | District Court of The Industrial District of Samara, Russia | August 2020 - January 2021 |
| Food & Beverage Associate | Kings Island, USA | May 2019 - September 2019 |

* **Education:**

| SPECIALIZATION: | PLACE OF STUDY: | PERIOD: | 
| ----------- | ----------- | ----------- |
| Front-End Web Development | Rolling Scopes School | July 2021 - Now |
| Full-Stack Web Development | JavaScript + Node.js + Vue.js in Real Projects, Udemy | March 2021 - June 2021 |
| Full-Stack Web Development | The Complete 2021 Web-Development Bootcamp, Udemy | January 2021 - April 2021 |
| Faculty of Law | Samara University | September 2016 - July 2020 |

* **English Level:** 
I think that my English level is B2. 
I took part in "Work & Travel USA", so I lived and worked in the USA from May to September 2019. I got to know many international students and US citizens! I had a lot of speaking practice and I hadn't got any problems with understanding out there.