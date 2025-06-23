// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
	Version: 1,
	Id: 'couchdb',
	Name: 'CouchDB',
	Description: 'TODO',
	Website: 'https://couchdb.apache.org',
	Deployment: ['Self-hosted'],
	License: 'Apache-2.0',
	MaturityLevel: 'Production-Ready',
	InitialReleaseDate: new Date('Wed Jul 14 2010 00:00:00 GMT+0100 (Central European Standard Time)'), 
	AppTarget: {
		Platform: { data: ['Linux', 'macOS', 'Windows', 'Unix'] },
		FrameworkIntegrations: { 
			data: [''],
			comment: 'None directly; all via PouchDB.',
		},
		LanguageSDK: { data: ['HTTP', 'JSON'] },
		// ClientBundleSize: { data: '46KB', comment: '46KB zipped'}
	},
	
	Networking: {
		Topology: { 
			data: 'P2P / Client-server / Mesh Network / Relay Server',
			// comment: ''
		},
		Protocol: {
			data: ['HTTP']
		}
	},
	ServerSideData: {
		PersistenceMechanism: { 
			data: ['Custom'],
			// comment: ''
		},
		DataModelParadigm: { data: 'Document' },
		DataSize: { data: 'Unlimited' },
		SchemaManagement: { data: ['Schema definition', 'Schema validation'],
			comment: 'Definition and validation optional.'
		}
	},
	SynchronizationStrategy: {
		FullOrPartialReplication: { 
			data: ['Full Replication', 'Partial Replication'],
			comment: 'Full Replication & Various Partial Replication Strategies'
		},
		ConflictHandling: { data: 'Flexible/Custom' },
		WhereResolutionOccurs: { data: 'Client and/or Server' },
		WhatGetsSynced: {
			data: {
				ServerToClient: 'Full document revisions',
				ClientToServer: 'Full document revisions'
			},
			comment: 'Efficient sync-list delta computation and efficient avoidance of redundant document sync.'
		},
		Authority: { 
			data: 'Default centralized, decentralized possible',
		},
		Latency: { 
			data: '~1–10ms',
			comment: 'Customisable for low-bandwidth and/or high-latency networks'
		},
		Concurrency: { data: 'Effectively unlimited' }
	},
	AuthIdentity: {
		Encryption: {
			data: 'Transport-level encryption',
		},
		AuthenticationMethod: {
			data: ['Built-in', 'JWT Tokens', 'Basic Auth', 'Proxy Auth']
		},
		AuthorizationPermissions: {
			data: 'RBAC'
		}
	},
	DevelopmentWorkflowsDX: {
		TypeSupport: { data: 'Full type support'},
		DebuggingTools: { data: ['Data Inspector', 'Network Inspector']},
		CLI: { data: 'Standard tooling like curl & jq suffices' }
	}
})
