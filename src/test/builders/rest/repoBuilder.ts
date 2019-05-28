import * as REST from '@octokit/rest';
import { UserBuilder } from './userBuilder';
import { OrganizationBuilder } from './organizationBuilder';
import { createBuilderClass, createLink } from '../base';

export type RepoUnion =
	REST.PullRequestsGetResponseHeadRepo &
	REST.PullRequestsGetAllResponseItemBaseRepo &
	REST.ReposGetResponse;

type License = RepoUnion['license'];
type Permissions = RepoUnion['permissions'];

export const RepositoryBuilder = createBuilderClass<RepoUnion>()({
	id: {default: 0},
	node_id: {default: 'node0'},
	name: {default: 'reponame'},
	full_name: {default: 'octocat/reponame'},
	description: {default: 'The default repo'},
	owner: {linked: UserBuilder},
	organization: {linked: OrganizationBuilder},
	parent: {default: null} as any, // These are absent when the repo is not a fork.
	source: {default: null} as any,
	private: {default: false},
	fork: {default: false},
	url: {default: 'https://api.github.com/repos/octocat/reponame'},
	html_url: {default: 'https://github.com/octocat/reponame'},
	archive_url: {default: 'http://api.github.com/repos/octocat/reponame/{archive_format}{/ref}'},
	assignees_url: {default: 'http://api.github.com/repos/octocat/reponame/assignees{/user}'},
	blobs_url: {default: 'http://api.github.com/repos/octocat/reponame/git/blobs{/sha}'},
	branches_url: {default: 'http://api.github.com/repos/octocat/reponame/branches{/branch}'},
	collaborators_url: {default: 'http://api.github.com/repos/octocat/reponame/collaborators{/collaborator}'},
	comments_url: {default: 'http://api.github.com/repos/octocat/reponame/comments{/number}'},
	commits_url: {default: 'http://api.github.com/repos/octocat/reponame/commits{/sha}'},
	compare_url: {default: 'http://api.github.com/repos/octocat/reponame/compare/{base}...{head}'},
	contents_url: {default: 'http://api.github.com/repos/octocat/reponame/contents/{+path}'},
	contributors_url: {default: 'http://api.github.com/repos/octocat/reponame/contributors'},
	deployments_url: {default: 'http://api.github.com/repos/octocat/reponame/deployments'},
	downloads_url: {default: 'http://api.github.com/repos/octocat/reponame/downloads'},
	events_url: {default: 'http://api.github.com/repos/octocat/reponame/events'},
	forks_url: {default: 'http://api.github.com/repos/octocat/reponame/forks'},
	git_commits_url: {default: 'http://api.github.com/repos/octocat/reponame/git/commits{/sha}'},
	git_refs_url: {default: 'http://api.github.com/repos/octocat/reponame/git/refs{/sha}'},
	git_tags_url: {default: 'http://api.github.com/repos/octocat/reponame/git/tags{/sha}'},
	git_url: {default: 'git:github.com/octocat/reponame.git'},
	issue_comment_url: {default: 'http://api.github.com/repos/octocat/reponame/issues/comments{/number}'},
	issue_events_url: {default: 'http://api.github.com/repos/octocat/reponame/issues/events{/number}'},
	issues_url: {default: 'http://api.github.com/repos/octocat/reponame/issues{/number}'},
	keys_url: {default: 'http://api.github.com/repos/octocat/reponame/keys{/key_id}'},
	labels_url: {default: 'http://api.github.com/repos/octocat/reponame/labels{/name}'},
	languages_url: {default: 'http://api.github.com/repos/octocat/reponame/languages'},
	merges_url: {default: 'http://api.github.com/repos/octocat/reponame/merges'},
	milestones_url: {default: 'http://api.github.com/repos/octocat/reponame/milestones{/number}'},
	notifications_url: {default: 'http://api.github.com/repos/octocat/reponame/notifications{?since,all,participating}'},
	pulls_url: {default: 'http://api.github.com/repos/octocat/reponame/pulls{/number}'},
	releases_url: {default: 'http://api.github.com/repos/octocat/reponame/releases{/id}'},
	ssh_url: {default: 'git@github.com:octocat/reponame.git'},
	stargazers_url: {default: 'http://api.github.com/repos/octocat/reponame/stargazers'},
	statuses_url: {default: 'http://api.github.com/repos/octocat/reponame/statuses/{sha}'},
	subscribers_url: {default: 'http://api.github.com/repos/octocat/reponame/subscribers'},
	subscription_url: {default: 'http://api.github.com/repos/octocat/reponame/subscription'},
	tags_url: {default: 'http://api.github.com/repos/octocat/reponame/tags'},
	teams_url: {default: 'http://api.github.com/repos/octocat/reponame/teams'},
	trees_url: {default: 'http://api.github.com/repos/octocat/reponame/git/trees{/sha}'},
	clone_url: {default: 'https://github.com/octocat/reponame.git'},
	mirror_url: {default: 'git:git.example.com/octocat/reponame'},
	hooks_url: {default: 'http://api.github.com/repos/octocat/reponame/hooks'},
	svn_url: {default: 'https://svn.github.com/octocat/reponame'},
	homepage: {default: 'https://github.com'},
	language: {default: null},
	license: createLink<License>()({
		key: {default: 'mit'},
		name: {default: 'MIT License'},
		spdx_id: {default: 'MIT'},
		url: {default: 'https://api.github.com/licenses/mit'},
		node_id: {default: 'MDc6TGljZW5zZW1pdA=='},
	}),
	forks_count: {default: 9},
	stargazers_count: {default: 80},
	watchers_count: {default: 80},
	size: {default: 108},
	default_branch: {default: 'master'},
	open_issues_count: {default: 0},
	topics: {default: []},
	has_issues: {default: true},
	has_projects: {default: true},
	has_wiki: {default: true},
	has_pages: {default: false},
	has_downloads: {default: true},
	archived: {default: false},
	pushed_at: {default: '2011-01-26T19:06:43Z'},
	created_at: {default: '2011-01-26T19:01:12Z'},
	updated_at: {default: '2011-01-26T19:14:43Z'},
	permissions: createLink<Permissions>()({
		admin: {default: false},
		push: {default: false},
		pull: {default: true}
	}),
	allow_rebase_merge: {default: true},
	allow_squash_merge: {default: true},
	allow_merge_commit: {default: true},
	subscribers_count: {default: 42},
	network_count: {default: 0}
});

export type RepositoryBuilder = InstanceType<typeof RepositoryBuilder>;