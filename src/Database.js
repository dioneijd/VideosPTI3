 
    
    
    
    
    const groupers = [
        {
            id: 1,
            desc: 'WIS Suite',
            categories: [
                {
                    id: 1, 
                    desc: 'BASICS',
                    curseIds: []
                },
                {
                    id: 2, 
                    desc: 'MASTER DATA',
                    curseIds: []
                },
                {
                    id: 3, 
                    desc: 'SALES',
                    curseIds: []
                },
                {
                    id: 4, 
                    desc: 'LOGISTICS',
                    curseIds: []
                },
                {
                    id: 5, 
                    desc: 'FINANCIALS',
                    curseIds: []
                },
                {
                    id: 6, 
                    desc: 'PURCHASES',
                    curseIds: []
                },
                {
                    id: 7, 
                    desc: 'QUALITY',
                    curseIds: []
                },
                {
                    id: 8, 
                    desc: 'PPC',
                    curseIds: []
                },
                {
                    id: 9, 
                    desc: 'MAINTENANCE',
                    curseIds: []
                },
                {
                    id: 10, 
                    desc: 'WAREHOUSE',
                    curseIds: []
                },
                {
                    id: 11, 
                    desc: 'INBOUND',
                    curseIds: []
                },
                {
                    id: 12, 
                    desc: 'PRODUCT ENG.',
                    curseIds: []
                },
                {
                    id: 13, 
                    desc: 'INDUSTRIAL ENG.',
                    curseIds: []
                },
                {
                    id: 14, 
                    desc: 'AFTER SALES',
                    curseIds: []
                },
                {
                    id: 15, 
                    desc: 'COSTS',
                    curseIds: []
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
                    desc: 'JIRA',
                    curseIds: []
                },
                {
                    id: 2, 
                    desc: 'MS EXCEL',
                    curseIds: []
                },
                {
                    id: 3, 
                    desc: 'MS OUTLOOK',
                    curseIds: [76, 68, 69, 70, 71, 72]
                },
                {
                    id: 4, 
                    desc: 'MS POWER POINT',
                    curseIds: [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]
                },
                {
                    id: 5, 
                    desc: 'PROJECT',
                    curseIds: []
                },
                {
                    id: 6, 
                    desc: 'WBS CHART PRO',
                    curseIds: []
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
		}

        

        

        
    ]