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