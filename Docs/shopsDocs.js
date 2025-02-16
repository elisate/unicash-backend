/**
 * @swagger
 * components:
 *   schemas:
 *     Shop:
 *       type: object
 *       required:
 *         - shopName
 *         - shopTIN
 *         - shopLocation
 *         - shopEmail
 *         - shopContact
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the shop
 *         shopName:
 *           type: string
 *           description: Name of the shop
 *         shopTIN:
 *           type: string
 *           description: TIN (Taxpayer Identification Number) of the shop
 *         shopLocation:
 *           type: string
 *           description: Location of the shop
 *         shopEmail:
 *           type: string
 *           description: Contact email of the shop
 *         shopContact:
 *           type: string
 *           description: Contact number of the shop
 *         RegCertificate:
 *           type: array
 *           items:
 *             type: string
 *           description: Registration certificate documents
 *         agreementDoc:
 *           type: array
 *           items:
 *             type: string
 *           description: Agreement documents for the shop
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: Images of the shop
 *       example:
 *         shopName: "Tech Store"
 *         shopTIN: "123456789"
 *         shopLocation: "Downtown City"
 *         shopEmail: "shop@example.com"
 *         shopContact: "+250788123456"
 *         RegCertificate: ["certificate1.pdf"]
 *         agreementDoc: ["agreement1.pdf"]
 *         images: ["image1.jpg"]
 *
 * /shop/createShop:
 *   post:
 *     summary: Create a new shop
 *     tags: [Shops]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               shopName:
 *                 type: string
 *               shopTIN:
 *                 type: string
 *               shopLocation:
 *                 type: string
 *               shopEmail:
 *                 type: string
 *               shopContact:
 *                 type: string
 *               RegCertificate:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               agreementDoc:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Shop created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shop'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 *
 * /shop/getShops:
 *   get:
 *     summary: Retrieve all shops
 *     tags: [Shops]
 *     responses:
 *       200:
 *         description: A list of shops
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Shop'
 *       500:
 *         description: Internal server error
 *
 * /shop/getShopById/{id}:
 *   get:
 *     summary: Get a shop by ID
 *     tags: [Shops]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Shop details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shop'
 *       404:
 *         description: Shop not found
 *       500:
 *         description: Internal server error
 *
 * /shop/updateShopById/{id}:
 *   put:
 *     summary: Update shop details
 *     tags: [Shops]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               shopName:
 *                 type: string
 *               shopTIN:
 *                 type: string
 *               shopLocation:
 *                 type: string
 *               shopEmail:
 *                 type: string
 *               shopContact:
 *                 type: string
 *               RegCertificate:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               agreementDoc:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Shop updated successfully
 *       404:
 *         description: Shop not found
 *       500:
 *         description: Internal server error
 *
 * shop/deleteShopById/{id}:
 *   delete:
 *     summary: Delete a shop by ID
 *     tags: [Shops]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Shop deleted successfully
 *       404:
 *         description: Shop not found
 *       500:
 *         description: Internal server error
 */
