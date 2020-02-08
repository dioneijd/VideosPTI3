
const groupers = [
	{
		id: 1,
		desc: 'WIS Suite',
		categories: [
			{
				id: 1, 
				desc: 'BASICS',
				curseIds: [100, 105, 135, 153, 156, 157]
			},
			{
				id: 2, 
				desc: 'MASTER DATA',
				curseIds: [96, 97, 98, 99, 111, 125, 126, 127, 128, 129]
			},
			{
				id: 3, 
				desc: 'SALES',
				curseIds: [79, 80, 81, 82, 83, 84, 85]
			},
			{
				id: 4, 
				desc: 'LOGISTICS',
				curseIds: [86, 87, 158, 159]
			},
			{
				id: 5, 
				desc: 'FINANCIALS',
				curseIds: [152, 154, 155]
			},
			{
				id: 6, 
				desc: 'PURCHASES',
				curseIds: [73, 88, 89, 90, 91, 92, 93, 94]
			},
			{
				id: 7, 
				desc: 'QUALITY',
				curseIds: [116, 117, 118, 119, 120]
			},
			{
				id: 8, 
				desc: 'PPC',
				curseIds: [101, 102, 103, 104, 106, 107, 108, 109, 110]
			},
			{
				id: 9, 
				desc: 'MAINTENANCE',
				curseIds: []
			},
			{
				id: 10, 
				desc: 'WAREHOUSE',
				curseIds: [130, 131, 132, 133, 134]
			},
			{
				id: 11, 
				desc: 'INBOUND',
				curseIds: []
			},
			{
				id: 12, 
				desc: 'PRODUCT ENG.',
				curseIds: [95, 112, 113, 114, 115]
			},
			{
				id: 13, 
				desc: 'INDUSTRIAL ENG.',
				curseIds: []
			},
			{
				id: 14, 
				desc: 'AFTER SALES',
				curseIds: [121, 122, 123, 124, 125]
			},
			{
				id: 15, 
				desc: 'COSTS',
				curseIds: [74, 75, 76, 77, 78]
			}

		]

	},
	{
		id: 2,
		desc: 'WIS One',
		categories: [
			{
				id: 1, 
				desc: 'BASICS',
				curseIds: [1, 27, 28, 45, 46, 47, 48, 49, 50]
			},
			{
				id: 2, 
				desc: 'MASTER DATA',
				curseIds: [29, 39, 43]
			},
			{
				id: 3, 
				desc: 'SALES',
				curseIds: [2, 3, 4, 11, 24, 26, 32, 51]
			},
			{
				id: 4, 
				desc: 'LOGISTICS',
				curseIds: [5, 6, 7, 8, 9, 10, 25, 30, 31, 33, 34, 35, 36, 37, 44]
			},
			{
				id: 5, 
				desc: 'FINANCIALS',
				curseIds: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 38, 40, 41, 42, 52]
			}
		]
	},
	{
		id: 3,
		desc: 'Others Systems',
		categories: [
			{
				id: 1, 
				desc: 'CAMTASIA',
				curseIds: [150]
			},
			{
				id: 2, 
				desc: 'JIRA',
				curseIds: [136, 137, 138, 139, 140, 141]
			},
			{
				id: 3, 
				desc: 'MS EXCEL',
				curseIds: []
			},
			{
				id: 4, 
				desc: 'MS OUTLOOK',
				curseIds: [76, 68, 69, 70, 71, 72]
			},
			{
				id: 5, 
				desc: 'MS POWER POINT',
				curseIds: [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]
			},
			{
				id: 6, 
				desc: 'MS PROJECT',
				curseIds: [147, 148, 149]
			},
			{
				id: 7, 
				desc: 'PROJECT MANAGEMENT',
				curseIds: [142, 143, 146]
			},
			{
				id: 8, 
				desc: 'SALES FORCE',
				curseIds: [145, 151]
			},
			{
				id: 9, 
				desc: 'WBS CHART PRO',
				curseIds: [144]
			}
		]
	}
	
]




const curses = [
	{
		id: 1,
		active: true,
		title: 'Getting Started',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Log on to SAP Business One',
			'Set personal settings',
			'View a customer record',
			'Create and change a document'
		],
		video: {
			url: 'videos/001GettingStarted.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN'],
		postedOn : '2014-12-03'
	},

	{
		id: 2,
		active: true,
		title: 'Sales Process',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'List the basic steps of the sales proces',
			'Describe the effect of each step on inventory and accounting'
		],
		video: {
			url: 'videos/002SalesProcess.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 3,
		active: true,
		title: 'Issues in Sales',
		subTitle: 'At the end of this session, you will be able to describe how to handle issues that arise in the sales process:',
		topics: [
			'Product unavailability',
			'Returns',
			'Credits',
			'Exchanges'
		],
		video: {
			url: 'videos/003Issues_in_Sales.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 4,
		active: true,
		title: 'Pricing',
		subTitle: 'At the end of this session, you will be able to describe how to set up pricing options in SAP Business One:',
		topics: [
			'Basic price lists',
			'Period and Volume Discounts',
			'Discount Groups',
			'Special prices for business partners'
		],
		video: {
			url: 'videos/004Pricing.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 5,
		active: true,
		title: 'Purchasing Items',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'List the basic process steps for purchasing items',
			'Explain the consequences of each step on inventory and accounting',
		],
		video: {
			url: 'videos/005PurchasingItems.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 6,
		active: true,
		title: 'Purchasing Services',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Describe the process of purchasing services with a purchase order',
			'List the steps needed to enter an A/P service invoice for rent or utility services',
		],
		video: {
			url: 'videos/006PurchasingServices.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 7,
		active: true,
		title: 'Issues in Purchasing',
		subTitle: 'At the end of this session, you will be able to describe the options available for handling issues that arise in the purchasing process.',
		video: {
			url: 'videos/007PurchasingIssues.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 8,
		active: true,
		title: 'Setting Up Items',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Define item master data',
			'Describe the settings available for determining accounts and valuation for items',
			'Discuss how to manage items by serial numbers and by batches'
		],
		video: {
			url: 'videos/008SettingUpItems.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 9,
		active: true,
		title: 'Warehouse Management',
		subTitle: 'At the end of this session, you will be able to define the process steps for warehouse management.',
		video: {
			url: 'videos/009WarehouseManagement.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 10,
		active: false,
		title: 'Pick and Pack',
		subTitle: 'At the end of this session, you will be able to list the steps involved in picking and packing items for delivery.',
		video: {
			url: 'videos/010PickandPack.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 11,
		active: true,
		title: 'Materials Requirements Planning (MRP)',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Define a forecast',
			'Create an MRP scenario',
			'Run MRP'
		],
		video: {
			url: 'videos/011MRP.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 12,
		active: true,
		title: 'Accounting for Sales and Purchasing',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Discuss general accounting conventions',
			'Give examples of the automatic journal entries created during the sales, purchasing and inventory processes',
			'Acknowledge the financial settings that affect the processes automatic journal entries'
		],
		video: {
			url: 'videos/012Accouting_for_Sales_and_Purchasing.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 13,
		active: true,
		title: 'Handling Payments',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'List the steps of the payment process in SAP Business One',
			'Explain the consequences of each step on the involved G/L accounts',
			'Adjust the appropriate payment scenario to the customer needs and localization'
		],
		video: {
			url: 'videos/013Handling_Payments.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 14,
		active: true,
		title: 'Manage the Chart of Accounts',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'State how to set up a Chart of Accounts adapted to the company type',
			'Discuss the Chart of Accounts structure',
			'Describe the effect of the standard processes on the Chart of Accounts',
			'Manage the Chart of Accounts'
		],
		video: {
			url: 'videos/014Manage_the_Chart_of_Accounts.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 15,
		active: true,
		title: 'Post a Journal Entry',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Explain the ways to post journal entries in SAP Business One',
			'Enter a manual journal entry from a journal voucher',
			'Create a journal entry from a journal voucher',
			'Use a posting template',
			'Set up a recurring posting'
		],
		video: {
			url: 'videos/015Post_a_Journal_Entry.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 16,
		active: true,
		title: 'Posting Periods',
		subTitle: 'At the end of this session, you will be able to state how to define and manage posting periods.',
		video: {
			url: 'videos/016PostingPeriods.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 17,
		active: true,
		title: 'Internal Reconciliation',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Utilize the process of internal reconciliation in G/L accounts and business partners',
			'Review system reconciliations',
			'Perform internal reconciliation (manual type)'
		],
		video: {
			url: 'videos/017Internal_Reconciliation.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 18,
		active: true,
		title: 'Period End Closing',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Prepare for Period-End Closing',
			'Perform Period-End Closing',
		],
		video: {
			url: 'videos/018Period_End_Closing.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 19,
		active: true,
		title: 'Financial Reports',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Discuss the effect of standard processes in SAP Business One on Financial Reports: Balance Sheet, Trial Balance, and Profit and Loss',
			'Describe when to use each report',
			'Interpret typical report data'
		],
		video: {
			url: 'videos/019Financial_Reports.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 20,
		active: true,
		title: 'Cash Management Reports',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Discuss the effect of standard processes in SAP Business One on monetary reports',
			'Describe when to use each report',
			'Interpret typical report data'
		],
		video: {
			url: 'videos/020Cash_Management_Reports.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 21,
		active: true,
		title: 'Company, Analysis and Planning',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Discuss the effect of standard processes in SAP Business One on company analysis and planning reports',
			'Describe when to use each report',
			'Interpret typical report data'
		],
		video: {
			url: 'videos/021Company_Analysis_and_Planning.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 22,
		active: true,
		title: 'Currencies',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Define currencies in the implementation process',
			'Explain the consequences of the currency definition choices in your company on the financial accounting process',
			'Give examples of some currency issues in SAP Business One'
		],
		video: {
			url: 'videos/022Currencies.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 23,
		active: true,
		title: 'Accounting for Inventory',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'Explain the effects of the inventory system on the financial accounting process',
			'Give examples of Perpetual Inventory and Non-Perpetual Inventory Systems in SAP Business One'
		],
		video: {
			url: 'videos/023Accounting_for_Inventory.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 24,
		active: true,
		title: 'Bills of Material',
		subTitle: 'At the end of this session, you will be able to define the four types of bills of material.',
		video: {
			url: 'videos/024Bills_of_Material.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 25,
		active: true,
		title: 'Production Process',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'List the steps in the production process',
			'Discuss the effects of production on inventory and accounting'
		],
		video: {
			url: 'videos/025Production_Process.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 26,
		active: true,
		title: 'Service Process',
		subTitle: 'At the end of this session, you will be able to:',
		topics: [
			'List the steps in the service process',
			'Set up automatic generation of equipment cards and service contracts',
			'Manage a service call'
		],
		video: {
			url: 'videos/026Service_Process.swf',
			type: 'swf'
		},
		author: 'SAP',
		lang: ['EN']
	},

	{
		id: 27,
		active: true,
		title: 'Create an Itemcode via SAP ECC',
		subTitle: '',
		video: {
			url: 'videos/027TransferItemfromECCtoB1.swf',
			type: 'swf'
		},
		author: 'Dionei J. Delagnolo',
		lang: ['EN']
	},

	{
		id: 28,
		active: true,
		curseGroup: 'BASICS',
		title: 'Change SAP B1 Password',
		subTitle: '',
		video: {
			url: 'videos/028How_to_Change_Password.mp4',
			type: 'mp4'
		},
		author: 'Dionei J. Delagnolo',
		lang: ['EN', 'ES', 'PT']
	},

	{
		id: 29,
		active: true,
		title: 'List Items w/o Local Product Family',
		subTitle: '',
		video: {
			url: 'videos/029How_To_List_All_Items_Without_Local_Product_Family.mp4',
			type: 'mp4'
		},
		author: 'Dionei J. Delagnolo',
		lang: ['EN', 'ES', 'PT']
	},

	{
		id: 30,
		active: true,
		title: 'Approve an Approval Request',
		subTitle: '',
		video: {
			url: 'videos/030How_to_Approve_an_Approval_Request.mp4',
			type: 'mp4'
		},
		author: 'Elcio Lotito Junior',
		lang: ['EN', 'ES', 'PT']
	},

	{
		id: 31,
		active: true,
		title: 'Refuse an Approval Request',
		subTitle: '',
		video: {
			url: 'videos/031How_ to_Refuse_an_Approval_Request.mp4',
			type: 'mp4'
		},
		author: 'Elcio Lotito Junior',
		lang: ['EN', 'ES', 'PT']
	},

	{
		id: 32,
		active: true,
		title: 'Search an Item by BP Catalog Number',
		subTitle: '',
		video: {
			url: 'videos/032How_to_seacher_an_item_code_with_BP_catalog_number.mp4',
			type: 'mp4'
		},
		author: 'Dionei J. Delagnolo',
		lang: ['EN', 'ES', 'PT']
	},

	{
		id: 33,
		active: true,
		title: 'Picklist Proposal Manager',
		subTitle: '',
		video: {
			url: 'videos/033Picklist_Using_Picklist_Proposal_Manager.mp4',
			type: 'mp4'
		},
		author: 'Elcio Lotito Junior',
		lang: ['EN']
	},

	{
		id: 34,
		active: true,
		title: 'Receive PO manually by Scanners',
		subTitle: '',
		topics: [
			'How to receive goods from local supplier using scanners',
			'This is the standard process to perform this action'
		],
		video: {
			url: 'videos/034Receive_PO_manually_using_Scanners.mp4',
			type: 'mp4'
		},
		author: 'Elcio Lotito Junior',
		lang: ['EN']
	},

	{
		id: 35,
		active: true,
		title: 'Goods Return Based on Delivery Note',
		subTitle: 'How execute a return when we have only delivery note created',
		video: {
			url: 'videos/035Return_based_on_Delivery_Note.mp4',
			type: 'mp4'
		},
		author: 'Elcio Lotito Junior',
		lang: ['EN']
	},

	{
		id: 36,
		active: true,
		title: 'Container Receipt',
		subTitle: 'How receive goods in warehouse from a container',
		video: {
			url: 'videos/036Container_Receipt.mp4',
			type: 'mp4'
		},
		author: 'Elcio Lotito Junior',
		lang: ['EN']
	},

	{
		id: 37,
		active: true,
		title: 'Create Picklist by Sales Order',
		subTitle: '',
		topics: [
			'Procedure to create picklist in manual way inside Sales order',
			'This procedure is used as exception, once is manual and should be performed one by one'
		],
		video: {
			url: 'videos/037Picklist_Created_Inside_SO.mp4',
			type: 'mp4'
		},
		author: 'Elcio Lotito Junior',
		lang: ['EN']
	},

	{
		id: 38,
		active: true,
		title: 'Create a Credit Note',
		subTitle: '',
		video: {
			url: 'videos/038Create_a_Credit_Note.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN']
	},

	{
		id: 39,
		active: true,
		title: 'Fixed Assets Master Data',
		subTitle: '',
		video: {
			url: 'videos/039FixedAssetsMasterData.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN']
	},

	{
		id: 40,
		active: true,
		title: 'Create a Journal Voucher',
		subTitle: '',
		video: {
			url: 'videos/040CreateJournalVoucher.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN']
	},

	{
		id: 41,
		active: true,
		title: 'How to Make Payment On Account',
		subTitle: '',
		video: {
			url: 'videos/041Payment_On_Account.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN']
	},

	{
		id: 42,
		active: true,
		title: 'Create a New Payment Terms',
		subTitle: '',
		video: {
			url: 'videos/042PaymentTermsCreation.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN']
	},

	{
		id: 43,
		active: true,
		title: 'Search and Create a BP (ECC/B1)',
		subTitle: '',
		video: {
			url: 'videos/043SearchAndCreateBpOnSAPB1.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN']
	},

	{
		id: 44,
		active: true,
		title: 'How to Split Pallets',
		subTitle: '',
		video: {
			url: 'videos/044HowToSplitPallets.mp4',
			type: 'mp4'
		},
		author: 'Gabrielle Moretti Santandrea',
		lang: ['EN']
	},

	{
		id: 45,
		active: true,
		title: 'How To Add Columns In Document',
		subTitle: '',
		video: {
			url: 'videos/045HowToAddColumnsInDocument.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN']
	},

	{
		id: 46,
		active: true,
		title: 'How To Export Data To Excel',
		subTitle: '',
		video: {
			url: 'videos/046HowToExportToExcel.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN']
	},

	{
		id: 47,
		active: true,
		title: 'How To Create a System Improvement Request',
		subTitle: '',
		video: {
			url: 'videos/047HowToCreateImprovementRequest.mp4',
			type: 'mp4'
		},
		author: 'Dionei J. Delagnolo',
		lang: ['EN', 'ES', 'PT']
	},

	{
		id: 48,
		active: true,
		title: 'How To Re-start Boyum Add-on',
		subTitle: 'We will see in this video:',
		topics: [
			'how to STOP the add-on',
			'how to START the add-on'
		],
		video: {
			url: 'videos/048HowToRe-StartBoyumAdd-on.mp4',
			type: 'mp4'
		},
		author: 'Dionei J. Delagnolo',
		lang: ['EN', 'ES', 'PT'],
		postedOn: ''
		
	},

	{
		id: 49,
		active: true,
		title: 'How To Re-start Produmex Add-on',
		subTitle: 'We will see in this video:',
		topics: [
			'how to STOP the add-on',
			'how to START the add-on'
		],
		video: {
			url: 'videos/049HowToRe-StartProdumexAdd-on.mp4',
			type: 'mp4'
		},
		author: 'Dionei J. Delagnolo',
		lang: ['EN', 'ES', 'PT'],
		postedOn: ''
	},

	{
		id: 50,
		active: true,
		title: 'How To Close All B1 Screen With One Click',
		video: {
			url: 'videos/050HowToCloseAllScreenWithOneClick.mp4',
			type: 'mp4'
		},
		author: 'Dionei J. Delagnolo',
		lang: ['EN', 'ES', 'PT'],
		postedOn: ''
	},

	{
		id: 51,
		active: true,
		title: 'How to Open an Order Received From B1',
		video: {
			url: 'videos/051HowtoOpenTheOrderReceivedFromB1.mp4',
			type: 'mp4'
		},
		author: 'Dionei J. Delagnolo',
		lang: ['EN', 'ES', 'PT'],
		postedOn: '20200107'
	},

	{
		id: 52,
		active: true,
		title: 'How To Change G/L Account For All Currencies',
		video: {
			url: 'videos/052HowToChangeAccountForAllCurrencies.mp4',
			type: 'mp4'
		},
		author: 'Dionei J. Delagnolo',
		lang: ['EN', 'ES', 'PT'],
		postedOn: '20200107'
	},

	{
		id: 53,
		active: true,
		title: 'Como Começar Uma Apresentação 1 de 2',
		video: {
			url: 'videos/053Como_começar_uma_apresentação_1de2.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 54,
		active: true,
		title: 'Como Começar Uma Apresentação 2 de 2',
		video: {
			url: 'videos/054Como_começar_uma_apresentação_2de2.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 55,
		active: true,
		title: 'Teclas de Atalhos 1 de 2',
		video: {
			url: 'videos/055Teclas_de_Atalho_do_MSPowerPoint_parte1.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 56,
		active: true,
		title: 'Teclas de Atalhos 2 de 2',
		video: {
			url: 'videos/056Teclas_de_Atalho_do_MSPowerPoint_parte2.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 57,
		active: true,
		title: 'Uso do Pincel De Formatação',
		video: {
			url: 'videos/057O_uso_do_Pincel_de_Formatacao.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 58,
		active: true,
		title: 'Compactando Imagens em sua Apresentação',
		video: {
			url: 'videos/058Compactando_Imagens_em_sua_apresentacao.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 59,
		active: true,
		title: 'Como Ajustar um Conteudo de Outra Apresentação',
		video: {
			url: 'videos/059Como_ajustar_um_conteudo_de_outra_apresentacao.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 60,
		active: true,
		title: 'Trabalhando com Tabelas em Seus Slides',
		video: {
			url: 'videos/060Trabalhando_com_tabelas_em_seus_slides.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 61,
		active: true,
		title: 'Como Organizar Sua Apresentação em Seções',
		video: {
			url: 'videos/061Como_organizar_sua_apresentação_em_Secoes.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 62,
		active: true,
		title: 'Como Criar Efeito De Zoom',
		video: {
			url: 'videos/062Como_criar_o_efeito_de_zoom.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 63,
		active: true,
		title: 'Como Mesclar Formas',
		video: {
			url: 'videos/063Como_mesclar_formas.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 64,
		active: true,
		title: 'Atalhos Modo Apresentação',
		video: {
			url: 'videos/064Atalhos_Modo_Apresentacao.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 65,
		active: true,
		title: 'Usar Intervalos no Modo Apresentação',
		video: {
			url: 'videos/065Usar_intervalos_no_modo_apresentacao.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 66,
		active: true,
		title: 'Harmonize as Cores de sua Apresentação',
		video: {
			url: 'videos/066Harmonize_as_cores_de_sua_apresentacao.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 67,
		active: true,
		title: 'Fuso Horário Adicional em Seu Calendário',
		video: {
			url: 'videos/067Fuso_Horario_Adicional_em_seu_Calendario.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 68,
		active: true,
		title: 'Etapas Rápidas do MSOutlook',
		video: {
			url: 'videos/068Etapas_Rapidas_do_MSOutlook.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 69,
		active: true,
		title: 'Email não Aceita Formatação',
		video: {
			url: 'videos/069Email_nao_aceita_formatacao.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 70,
		active: true,
		title: 'Como Atrasar o Envio de Mensagens',
		video: {
			url: 'videos/070Como_atrasar_o_envio_de_mensagens.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 71,
		active: true,
		title: 'Marque Reuniões com Apenas Clique',
		video: {
			url: 'videos/071Marque_reunioes_com_apenas_1clique.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

	{
		id: 72,
		active: true,
		title: 'Uso de Regras',
		video: {
			url: 'videos/072O_Uso_de_Regras_do_MSOutlook.mp4',
			type: 'mp4'
		},
		author: 'Fabio Arakava',
		lang: ['PT'],
		postedOn: '20200113'
	},

		{
		id: 73,
		active: true,
		title: 'How to mack collecive release',
		video: {
			url: 'videos/073Howtomakecollectiverelease_MM.mp4',
			type: 'mp4'
		},
		author: 'Celso Rosa',
		lang: ['EN'],
		postedOn: '14.01.2020'
	},

	{
		id: 74,
		active: true,
		title: 'Acess report CPVA',
		video: {
			url: 'videos/074CPVABOAccessFI.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN'],
		postedOn: '15.01.2020'
	},

	{
		id: 75,
		active: true,
		title: 'Filter by report data CPVA',
		video: {
			url: 'videos/075CPVABOFilterbyReportData_FI.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN'],
		postedOn: '15.01.2020'
	},

	{
		id: 76,
		active: true,
		title: 'Filter by Product or Customer CPVA',
		video: {
			url: 'videos/076CPVABOFilterbyProductorCustomer_FI.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN'],
		postedOn: '15.01.2020'
	},

	{
		id: 77,
		active: true,
		title: 'Filters in Refresh CPVA',
		video: {
			url: 'videos/077CPVABOFiltersinRefresh_FI.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN'],
		postedOn: '15.01.2020'
	},

	{
		id: 78,
		active: true,
		title: 'Reports CPVA ',
		video: {
			url: 'videos/078CPVA_BO_Reports_FI.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN'],
		postedOn: '15.01.2020'
	},

	{
		id: 79,
		active: true,
		title: 'Customer Master Data',
		video: {
			url: 'videos/079CustomerMasterData_SD.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN'],
		postedOn: '15.01.2020'
	},

	{
		id: 80,
		active: true,
		title: 'Terms and Conditions for quotation',
		video: {
			url: 'videos/080SO10_SD.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN'],
		postedOn: '15.01.2020'
	},

	{
		id: 81,
		active: true,
		title: 'Navigating through the sales order',
		video: {
			url: 'videos/081Navigatingthroughthesalesorder_SD.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN'],
		postedOn: '15.01.2020'
	},

	{
		id: 82,
		active: true,
		title: 'SALES CONTRACT- VA41' ,
		video: {
			url: 'videos/082VA41_SALESCONTRACT_V1_SD.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN'],
		postedOn: '15.01.2020'
	},

	{
		id: 83,
		active: true,
		title: 'IDOC Orders Monitor - ZTSD257 ',
		video: {
			url: 'videos/083ZTSD257IDOCOrdersMonitor_SD.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN'],
		postedOn: '15.01.2020'
	},

	{
		id: 84,
		active: true,
		title: 'Sales contract follow-up ZTSD297',
		video: {
			url: 'videos/084ZTSD297Salescontractfollowup_SD.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN'],
		postedOn: '15.01.2020'
	},

	{
		id: 85,
		active: true,
		title: 'Saneamento Visões Vendas',
		video: {
			url: 'videos/085SaneamentoVisõesVendas_SD.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['PT'],
		postedOn: '15.01.2020'
	},

	{
		id: 86,
		active: true,
		title: 'Outbound delivery Monitor - VL10G',
		video: {
			url: 'videos/086VL10GOutbounddeliveryMonitor_V1_SD.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['EN'],
		postedOn: '15.01.2020'
	},
	
	{
		id: 87,
		active: true,
		title: 'Billing document monitor VF04',
		video: {
			url: 'videos/087VF04Billingdocumentmonitor_V1_SD.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 88,
		active: true,
		title: 'How to check purchasing documents',
		video: {
			url: 'videos/088Howtocheckpurchasingdocuments_MM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 89,
		active: true,
		title: 'MB1B',
		video: {
			url: 'videos/089MB1B_MM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 90,
		active: true,
		title: 'Extend a Vendor',
		subTitle: 'Transaction XK01 - Hot to extend a Vendor',
		video: {
			url: 'videos/090XK01_MM.mp4',
			type: 'mp4'
		},
		author: 'Celso Ednei da Rosa',
		lang: [''],
		postedOn: '2019-11-29'
	},
	
	{
		id: 91,
		active: true,
		title: 'Goods Receipt based on Shipping Document',
		subTitle: 'Transaction ZTMM173',
		video: {
			url: 'videos/091ZTMM173_MM.mp4',
			type: 'mp4'
		},
		author: 'Celso Ednei da Rosa',
		lang: [''],
		postedOn: '2019-11-29'
	},
	
	{
		id: 92,
		active: true,
		title: 'How to create physical inventory document',
		subTitle: 'How to create physical inventory document - MI01',
		video: {
			url: 'videos/092MI01Howtocreatephysicalinventorydocument_MM.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 92,
		active: true,
		title: 'How to post inventory count',
		subTitle: 'How to post inventory count MI07 - MI20',
		video: {
			url: 'videos/092MI07_MI20Howopostinventorycount_MM.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 93,
		active: true,
		title: 'How to enter physical inventory count',
		subTitle: 'MI04 - How to enter physical inventory count',
		video: {
			url: 'videos/093MI04Howtoenterphysicalinventorycount_MM.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 94,
		active: true,
		title: 'How to create a Purchase Requisition',
		subTitle: 'ME51N - How to create a Purchase Requisition',
		video: {
			url: 'videos/094ME51NHowtocreateaPurchaseRequisition_MM.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 95,
		active: true,
		title: 'Search Material by Class',
		subTitle: 'How to Search Material by Class - transaction CL30N',
		video: {
			url: 'videos/095CL30NMaterialsSearchbyClass_PLM.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 96,
		active: true,
		title: 'Track Work flow of Material Master Data',
		subTitle: 'ZTMM069 - How to Track Work flow of Material Master Data',
		video: {
			url: 'videos/096ZTMM069HowtoTrackWorkflowofMaterialMasterData_MDM.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 97,
		active: true,
		title: 'Expand Material Master Data ZTMM020',
		subTitle: 'ZTMM020 - How to Request to Expand Material Master Data',
		video: {
			url: 'videos/097ZTMM020HowtoExpandMaterialMasterData_MDM.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 98,
		active: true,
		title: 'Change Material Master Data',
		subTitle: 'ZTMM020 - How to Request to Change Material Master Data',
		video: {
			url: 'videos/098ZTMM020HowtoChangeMaterialMasterData_MDM.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 99,
		active: true,
		title: 'Elimante Material Master Data',
		subTitle: 'ZTMM020 - How to request to Elimante Material Master Data',
		video: {
			url: 'videos/099ZTMM020HowtoElimanteMaterialMasterData_MDM.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 100,
		active: true,
		title: 'Work flow in SAP Business Work place SBWP',
		subTitle: 'How to manage workflows with SBWP transaction',
		video: {
			url: 'videos/100SBWPWorkflowinSAPBusinessWorkplace_MDM.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 101,
		active: true,
		title: 'How to create holiday',
		subTitle: 'Video 1 of 3: How to create holiday - transaction SCAL',
		topics:[
			'<b>OBJECTIVE:</b>',
			'How to crete holiday taht will be used in the calendars',
			'Calendars are used in serveral SAP modules'
		],
		video: {
			url: 'videos/101SCALHowtocreateholiday_PP.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 102,
		active: true,
		title: 'How to create holidays calendars',
		subTitle: 'Video 2 of 3: How to create holidays calendars - transaction SCAL',
		topics:[
			'<b>OBJECTIVE:</b>',
			'How to crete holiday calendars to be used in calendars',
			'Calendars are used in serveral SAP modules'
		],
		video: {
			url: 'videos/102SCALHowtocreateholidayscalendars_PP.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 103,
		active: true,
		title: 'How to create calendars',
		subTitle: 'Video 3 of 3: How to Create calendars - transaction SCAL',
		topics:[
			'<b>OBJECTIVE:</b>',
			'How to crete calendars in SAP',
			'Calendars are used in serveral SAP modules'
		],
		video: {
			url: 'videos/103SCALHowtoCreatecalendars_PP.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 104,
		active: true,
		title: 'How to set non working days',
		subTitle: 'SCAL - How to set non working days',
		video: {
			url: 'videos/104SCALHowtosetnonworkingdays_PP.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 105,
		active: true,
		title: 'How to manage user data',
		subTitle: 'Transation SU3',
		video: {
			url: 'videos/105SU3Howtomanageuserdata_BASIC.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 106,
		active: true,
		title: 'How to Confirm Production Order',
		subTitle: 'CO11N - Enter confirmation for production order',
		video: {
			url: 'videos/106CO11NHowtoConfirmOrder_PP.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2019-11-29'
	},
	
	{
		id: 107,
		active: true,
		title: 'How to Confirm Production Order CO15',
		subTitle: 'CO15 - How to enter production order confirmation',
		video: {
			url: 'videos/107CO15HowtoConfirmProductionOrder_PP.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2019-11-29'
	},
	
	{
		id: 108,
		active: true,
		title: 'How to cancel production order confirmations',
		subTitle: 'CO13 - How to cancel production order confirmations',
		video: {
			url: 'videos/108CO13Howtocancelproductionorderconfirmations_PP.mp4',
			type: 'mp4'
		},
		author: 'Yuri Odebrecht',
		lang: [''],
		postedOn: '2019-11-29'
	},
	
	{
		id: 109,
		active: true,
		title: 'Create Production Order type ZMS1 CO01',
		subTitle: 'Create a new production order for stock of type ZMS1. Transaction CO01',
		video: {
			url: 'videos/109CO01CreateProductionOrderZMS1type_PP.mp4',
			type: 'mp4'
		},
		author: 'Omero Müller',
		lang: [''],
		postedOn: '2019-11-26'
	},
	
	{
		id: 110,
		active: true,
		title: 'MRP execution MD01',
		subTitle: 'Run MRP for a plant with MD01 transation',
		video: {
			url: 'videos/110MRPexecutionMD01_PP.mp4',
			type: 'mp4'
		},
		author: 'Omero Müller',
		lang: [''],
		postedOn: '2019-11-26'
	},
	
	{
		id: 111,
		active: true,
		title: 'Data Cleasing Status',
		subTitle: 'Transaction - ZTMMGSM',
		video: {
			url: 'videos/111ZTMMGSM_PLM.mp4',
			type: 'mp4'
		},
		author: 'Fabiano Silva de Lima',
		lang: [''],
		postedOn: '2019-11-29'
	},
	
	{
		id: 112,
		active: true,
		title: 'How to create ECM',
		subTitle: 'Transaction - CC01',
		video: {
			url: 'videos/112ECM_PLM.mp4',
			type: 'mp4'
		},
		author: 'Fabiano Silva de Lima',
		lang: [''],
		postedOn: '2019-11-29'
	},
	
	{
		id: 113,
		active: true,
		title: 'Creation of Technical Lists - CS01',
		subTitle: 'Transaction - CS01',
		video: {
			url: 'videos/113CS01_PLM.mp4',
			type: 'mp4'
		},
		author: 'Fabiano Silva de Lima',
		lang: [''],
		postedOn: '2019-11-29'
	},
	
	{
		id: 114,
		active: true,
		title: 'Create Document - CV01N',
		subTitle: 'Transaction - CV01N',
		video: {
			url: 'videos/114CV01N_PLM.mp4',
			type: 'mp4'
		},
		author: 'Fabiano Silva de Lima',
		lang: [''],
		postedOn: '2019-11-30'
	},
	
	{
		id: 115,
		active: true,
		title: 'Search Material VC',
		subTitle: 'Search VC Created Material Configuration',
		video: {
			url: 'videos/115SearchMaterialVC_PLM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2019-11-30'
	},
	
	{
		id: 116,
		active: true,
		title: 'Create Inspection Characteristic',
		video: {
			url: 'videos/116CreateInspectionCharacteristic_QM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{
		id: 117,
		active: true,
		title: 'Change Inspection Characteristic',
		video: {
			url: 'videos/117ChangeInspectionCharacteristic_QM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2019-11-25'
	},
	
	{
		id: 118,
		active: true,
		title: 'Display Inspection Characteristic',
		video: {
			url: 'videos/118DisplayInspectionCharacteristic_QM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2019-11-25'
	},
	
	{
		id: 119,
		active: true,
		title: 'Display List of Characterisctics',
		video: {
			url: 'videos/119DisplayListofCharacterisctics_QM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2019-11-25'
	},
	
	{
		id: 120,
		active: true,
		title: 'Inspection Characteristic Where Used List',
		video: {
			url: 'videos/120InspectionCharacteristicWhereUsedList_QM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2019-11-25'
	},
	
	{
		id: 121,
		active: true,
		title: 'Nota Serviço IW51',
		video: {
			url: 'videos/121IW51Nota_Serviço_CS.mp4',
			type: 'mp4'
		},
		author: 'Carlos Eduardo Rodrigues Ferreira',
		lang: [''],
		postedOn: '2019-11-30'
	},
	
	{
		id: 122,
		active: true,
		title: 'Ordem Serviço IW31',
		video: {
			url: 'videos/122IW31Ordem_Serviço_CS.mp4',
			type: 'mp4'
		},
		author: 'Carlos Eduardo Rodrigues Ferreira',
		lang: [''],
		postedOn: '2019-11-30'
	},
	
	{
		id: 123,
		active: true,
		title: 'IQ03 Rastreabilidade',
		video: {
			url: 'videos/123IQ03Rastreabilidade_CS.mp4',
			type: 'mp4'
		},
		author: 'Carlos Eduardo Rodrigues Ferreira',
		lang: [''],
		postedOn: '2019-11-30'
	},
	
	{
		id: 124,
		active: true,
		title: 'Conf horas IW41',
		video: {
			url: 'videos/124IW41Conf_horas_CS.mp4',
			type: 'mp4'
		},
		author: 'Carlos Eduardo Rodrigues Ferreira',
		lang: [''],
		postedOn: '2019-12-01'
	},
	
	{
		id: 125,
		active: true,
		title: 'Load of translation Characteristics ZTMM082',
		video: {
			url: 'videos/125ZTMM082LoadoftranslationCharacteristics_MDM.mp4',
			type: 'mp4'
		},
		author: 'Cristian Rodolfo Dantas',
		lang: [''],
		postedOn: '2020-01-16'
	},
	
	{

		id: 126,
		active: true,
		title: 'Load of Transalation of Characteristics Upload Using Excel ZTMM082',
		video: {
			url: 'videos/126ZTMM082LoadofTransalationofCharacteristicsUploadUsingExcel_MDM.mp4',
			type: 'mp4'
		},
		author: 'Cristian Rodolfo Dantas',
		lang: [''],
		postedOn: '2019-11-27'
	},
	
	{
		id: 127,
		active: true,
		title: 'Characteristics with values Query by multi language ZTMM504',
		video: {
			url: 'videos/127ZTMM504CharacteristicswithvaluesQuerybymultilanguage_MDM.mp4',
			type: 'mp4'
		},
		author: 'Cristian Rodolfo Dantas',
		lang: [''],
		postedOn: '2019-11-27'
	},
	
	{
		id: 128,
		active: true,
		title: 'MAterial and Characteristics Translation Report ZTMM165',
		video: {
			url: 'videos/128ZTMM165MAterialandCharacteristicsTranslationReport_MDM.mp4',
			type: 'mp4'
		},
		author: 'Cristian Rodolfo Dantas',
		lang: [''],
		postedOn: '2019-11-27'
	},
	
	{
		id: 129,
		active: true,
		title: 'Class List focus in translation CL6AN',
		video: {
			url: 'videos/129CL6ANClassListfocusintranslation_MDM.mp4',
			type: 'mp4'
		},
		author: 'Cristian Rodolfo Dantas',
		lang: [''],
		postedOn: '2019-11-27'
	},
	
	{
		id: 130,
		active: true,
		title: 'ZYCRR034',
		video: {
			url: 'videos/130ZYCRR034_140_WM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2019-11-27'
	},
	
	{
		id: 131,
		active: true,
		title: 'VL06P',
		video: {
			url: 'videos/131VL06P_WM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2019-11-26'
	},
	
	{
		id: 132,
		active: true,
		title: 'Check invetory frim modshop to pick',
		video: {
			url: 'videos/132lx02_WM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2019-11-27'
	},
	
	{
		id: 133,
		active: true,
		title: 'Change default storage bin',
		video: {
			url: 'videos/133MM02_WM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2019-11-27'
	},
	
	{
		id: 134,
		active: true,
		title: 'LL01',
		video: {
			url: 'videos/134LL01_WM.mp4',
			type: 'mp4'
		},
		author: '',
		lang: [''],
		postedOn: '2019-11-26'
	},
	
	{
		id: 135,
		active: true,
		title: 'How To Open SAP ECC',
		subTitle: 'This video shows how you can open SAP ECC via MyWeg',
		topics: [
			'https://www.myweg.net'
		],
		video: {
			url: 'videos/135HowToOpenSAPECC.mp4',
			type: 'mp4'
		},
		author: 'Dionei J. Delagnolo',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-16'
	},
	
	{
		id: 136,
		active: true,
		title: 'Add Column Status On Board',
		subTitle: '',
		video: {
			url: 'videos/136AddColumnStatusOnBoard.mp4',
			type: 'mp4'
		},
		author: 'Denise Meneghel',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 137,
		active: true,
		title: 'Quick Filter',
		subTitle: '',
		video: {
			url: 'videos/137QuickFilter.mp4',
			type: 'mp4'
		},
		author: 'Denise Meneghel',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 138,
		active: true,
		title: 'Exportar Dados Para Atualiza PMT',
		subTitle: '',
		video: {
			url: 'videos/138ExportarDadosJiraAtualizaPMT.mp4',
			type: 'mp4'
		},
		author: 'Fabiano Boscaini',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 139,
		active: true,
		title: 'Adicionar Campo Em Formulário',
		subTitle: '',
		video: {
			url: 'videos/139AdicionarCampoEmFormulárioJIRA.mp4',
			type: 'mp4'
		},
		author: 'Denise Meneghel',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 140,
		active: true,
		title: 'Utilizando API',
		subTitle: '',
		video: {
			url: 'videos/140UtilizandoJiraAPI.mp4',
			type: 'mp4'
		},
		author: 'Raul Victor Trombi',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 141,
		active: true,
		title: 'Criar Sprints',
		subTitle: '',
		video: {
			url: 'videos/141CriarSprintsJira.mp4',
			type: 'mp4'
		},
		author: 'Fabiano Boscaini',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 142,
		active: true,
		title: 'Como Realizar Planejamento De Custos No PMT',
		subTitle: '',
		video: {
			url: 'videos/142ComoRealizarPlanejamentoDeCustosNoPMT.mp4',
			type: 'mp4'
		},
		author: 'Jean Carlo Niehues',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 143,
		active: true,
		title: 'Gerador De Notas Para Perdiem',
		subTitle: '',
		video: {
			url: 'videos/143GeradorDeNotasParaPerdiem.mp4',
			type: 'mp4'
		},
		author: 'Raul Victor Trombi',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 144,
		active: true,
		title: 'Instalar uplemento WBS Schedule Pro',
		subTitle: '',
		video: {
			url: 'videos/144InstalarSuplementoWBSSchedulePro.mp4',
			type: 'mp4'
		},
		author: 'Raul Victor Trombin',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 145,
		active: true,
		title: 'Criar Painel Sales Force',
		subTitle: '',
		video: {
			url: 'videos/145CriarPainelSalesForce.mp4',
			type: 'mp4'
		},
		author: 'Fabiano Boscaini',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 146,
		active: true,
		title: 'Encerrar Demanda PPM',
		subTitle: '',
		video: {
			url: 'videos/146EncerrarDemandaPPM.mp4',
			type: 'mp4'
		},
		author: 'Fabiano Boscaini',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 147,
		active: true,
		title: 'Como Criar Uma Linha De Base',
		subTitle: '',
		video: {
			url: 'videos/147ComoCriarUmaLinhaDeBaseNoMSProject.mp4',
			type: 'mp4'
		},
		author: 'Thiago C. Casanova',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 148,
		active: true,
		title: 'Como Alterar Data De Status',
		subTitle: '',
		video: {
			url: 'videos/148ComoAlterarDataDeStatusNoMSProject.mp4',
			type: 'mp4'
		},
		author: 'Thiago C. Casanova',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 149,
		active: true,
		title: 'Como Fazer Uma Visão',
		subTitle: '',
		video: {
			url: 'videos/149ComoFazerUmaVisãoNoMSProject.mp4',
			type: 'mp4'
		},
		author: 'Thiago C. Casanova',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2020-01-17'
	},
	
	{
		id: 150,
		active: true,
		title: 'Como Criar Videos',
		subTitle: '',
		video: {
			url: 'videos/150CamtasiaComoCriarVideos.mp4',
			type: 'mp4'
		},
		author: 'Ewerton Walter Rigon Furtado',
		lang: ['EN', 'PT', 'ES'],
		postedOn: '2019-06-27'
	}, 
	
	{
		id: 151,
		active: true,
		title: 'Como Encerrar Um Chamado',
		subTitle: '',
		video: {
			url: 'videos/151ComoEncerrarUmChamado.mp4',
			type: 'mp4'
		},
		author: 'Daiana Fernandes Pavanello',
		lang: ['PT'],
		postedOn: '2020-01-17'
	},
	{
		id: 152,
		active: true,
		title: 'Select open items by net due date',
		subTitle: '',
		video: {
			url: 'videos/152Selectopenitemsbynetduedate.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['PT'],
		postedOn: ''
	},
	{
		id: 153,
		active: true,
		title: 'Define parameters to print out',
		subTitle: '',
		video: {
			url: 'videos/153Defineparameterstoprintout.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['PT'],
		postedOn: ''
	},
	{
		id: 154,
		active: true,
		title: 'Work with work list',
		subTitle: '',
		video: {
			url: 'videos/154Workwithworklist.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['PT'],
		postedOn: ''
	},
	{
		id: 155,
		active: true,
		title: 'User defaults for cash application',
		subTitle: '',
		video: {
			url: 'videos/155Userdefaultsforcashapplication.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['PT'],
		postedOn: ''
	},
	{
		id: 156,
		active: true,
		title: 'Define user defaults',
		subTitle: '',
		video: {
			url: 'videos/156Defineuserdefaults.mp4',
			type: 'mp4'
		},
		author: '',
		lang: ['PT'],
		postedOn: ''
	},
	{
		id: 157,
		active: true,
		title: 'PDF',
		subTitle: '',
		video: {
			url: 'videos/B1.pdf',
			type: 'pdf'
		},
		author: '',
		lang: ['PT'],
		postedOn: ''
	},
	{
		id: 158,
		active: true,
		title: 'PDF',
		subTitle: '',
		video: {
			url: 'videos/DocWMJack.pdf',
			type: 'pdf'
		},
		author: '',
		lang: ['PT'],
		postedOn: ''
	},
	{
		id: 159,
		active: true,
		title: 'HTML',
		subTitle: '',
		video: {
			url: 'videos/FluxosFull.html',
			type: 'html'
		},
		author: '',
		lang: ['PT'],
		postedOn: ''
	},



	

	
]