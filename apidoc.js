/**,
 * Activity
 * @namespace Activity
 */


/**
 * @api {GET} /events listPublicEvents
 * @apiName listPublicEvents
 * @apiDescription We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.

<a href="https://developer.github.com/v3/activity/events/#list-public-events">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listPublicEvents({per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listPublicEvents({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/events listRepoEvents
 * @apiName listRepoEvents
 * @apiDescription <a href="https://developer.github.com/v3/activity/events/#list-repository-events">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listRepoEvents({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listRepoEvents({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /networks/:owner/:repo/events listPublicEventsForRepoNetwork
 * @apiName listPublicEventsForRepoNetwork
 * @apiDescription <a href="https://developer.github.com/v3/activity/events/#list-public-events-for-a-network-of-repositories">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listPublicEventsForRepoNetwork({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listPublicEventsForRepoNetwork({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/events listPublicEventsForOrg
 * @apiName listPublicEventsForOrg
 * @apiDescription <a href="https://developer.github.com/v3/activity/events/#list-public-events-for-an-organization">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} org  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listPublicEventsForOrg({org, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listPublicEventsForOrg({org, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /users/:username/received_events listReceivedEventsForUser
 * @apiName listReceivedEventsForUser
 * @apiDescription These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.

<a href="https://developer.github.com/v3/activity/events/#list-events-that-a-user-has-received">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listReceivedEventsForUser({username, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listReceivedEventsForUser({username, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /users/:username/received_events/public listReceivedPublicEventsForUser
 * @apiName listReceivedPublicEventsForUser
 * @apiDescription <a href="https://developer.github.com/v3/activity/events/#list-public-events-that-a-user-has-received">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listReceivedPublicEventsForUser({username, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listReceivedPublicEventsForUser({username, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /users/:username/events listEventsForUser
 * @apiName listEventsForUser
 * @apiDescription If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.

<a href="https://developer.github.com/v3/activity/events/#list-events-performed-by-a-user">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listEventsForUser({username, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listEventsForUser({username, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /users/:username/events/public listPublicEventsForUser
 * @apiName listPublicEventsForUser
 * @apiDescription <a href="https://developer.github.com/v3/activity/events/#list-public-events-performed-by-a-user">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listPublicEventsForUser({username, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listPublicEventsForUser({username, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /users/:username/events/orgs/:org listEventsForOrg
 * @apiName listEventsForOrg
 * @apiDescription This is the user's organization dashboard. You must be authenticated as the user to view this.

<a href="https://developer.github.com/v3/activity/events/#list-events-for-an-organization">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {string} org  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listEventsForOrg({username, org, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listEventsForOrg({username, org, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /feeds listFeeds
 * @apiName listFeeds
 * @apiDescription GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:

*   **Timeline**: The GitHub global public timeline
*   **User**: The public timeline for any user, using [URI template](https://developer.github.com/v3/#hypermedia)
*   **Current user public**: The public timeline for the authenticated user
*   **Current user**: The private timeline for the authenticated user
*   **Current user actor**: The private timeline for activity created by the authenticated user
*   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
*   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.

**Note**: Private feeds are only returned when [authenticating via Basic Auth](https://developer.github.com/v3/#basic-authentication) since current feed URIs use the older, non revocable auth tokens.

<a href="https://developer.github.com/v3/activity/feeds/#list-feeds">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiExample {js} async/await
 * const result = await octokit.activity.listFeeds({})
 * @apiExample {js} Promise
 * octokit.activity.listFeeds({}).then(result => {})
 */


/**
 * @api {GET} /notifications listNotifications
 * @apiName listNotifications
 * @apiDescription List all notifications for the current user, sorted by most recently updated.

The following example uses the `since` parameter to list notifications that have been updated after the specified time.

<a href="https://developer.github.com/v3/activity/notifications/#list-your-notifications">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {boolean} [all="false"]  If `true`, show notifications marked as read.
 * @apiParam {boolean} [participating="false"]  If `true`, only shows notifications in which the user is directly participating or mentioned.
 * @apiParam {string} [since]  Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {string} [before]  Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listNotifications({all, participating, since, before, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listNotifications({all, participating, since, before, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/notifications listNotificationsForRepo
 * @apiName listNotificationsForRepo
 * @apiDescription List all notifications for the current user.

<a href="https://developer.github.com/v3/activity/notifications/#list-your-notifications-in-a-repository">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {boolean} [all="false"]  If `true`, show notifications marked as read.
 * @apiParam {boolean} [participating="false"]  If `true`, only shows notifications in which the user is directly participating or mentioned.
 * @apiParam {string} [since]  Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {string} [before]  Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listNotificationsForRepo({owner, repo, all, participating, since, before, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listNotificationsForRepo({owner, repo, all, participating, since, before, per_page, page}).then(result => {})
 */


/**
 * @api {PUT} /notifications markAsRead
 * @apiName markAsRead
 * @apiDescription Marking a notification as "read" removes it from the [default view on GitHub](https://github.com/notifications).

<a href="https://developer.github.com/v3/activity/notifications/#mark-as-read">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} [last_read_at="current date/time"]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiExample {js} async/await
 * const result = await octokit.activity.markAsRead({last_read_at})
 * @apiExample {js} Promise
 * octokit.activity.markAsRead({last_read_at}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/notifications markNotificationsAsReadForRepo
 * @apiName markNotificationsAsReadForRepo
 * @apiDescription Marking all notifications in a repository as "read" removes them from the [default view on GitHub](https://github.com/notifications).

<a href="https://developer.github.com/v3/activity/notifications/#mark-notifications-as-read-in-a-repository">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [last_read_at="current date/time"]  Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiExample {js} async/await
 * const result = await octokit.activity.markNotificationsAsReadForRepo({owner, repo, last_read_at})
 * @apiExample {js} Promise
 * octokit.activity.markNotificationsAsReadForRepo({owner, repo, last_read_at}).then(result => {})
 */


/**
 * @api {GET} /notifications/threads/:thread_id getThread
 * @apiName getThread
 * @apiDescription <a href="https://developer.github.com/v3/activity/notifications/#view-a-single-thread">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {integer} thread_id  
 * @apiExample {js} async/await
 * const result = await octokit.activity.getThread({thread_id})
 * @apiExample {js} Promise
 * octokit.activity.getThread({thread_id}).then(result => {})
 */


/**
 * @api {PATCH} /notifications/threads/:thread_id markThreadAsRead
 * @apiName markThreadAsRead
 * @apiDescription <a href="https://developer.github.com/v3/activity/notifications/#mark-a-thread-as-read">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {integer} thread_id  
 * @apiExample {js} async/await
 * const result = await octokit.activity.markThreadAsRead({thread_id})
 * @apiExample {js} Promise
 * octokit.activity.markThreadAsRead({thread_id}).then(result => {})
 */


/**
 * @api {GET} /notifications/threads/:thread_id/subscription getThreadSubscription
 * @apiName getThreadSubscription
 * @apiDescription This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://developer.github.com/v3/activity/watching/#get-a-repository-subscription).

Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.

<a href="https://developer.github.com/v3/activity/notifications/#get-a-thread-subscription">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {integer} thread_id  
 * @apiExample {js} async/await
 * const result = await octokit.activity.getThreadSubscription({thread_id})
 * @apiExample {js} Promise
 * octokit.activity.getThreadSubscription({thread_id}).then(result => {})
 */


/**
 * @api {PUT} /notifications/threads/:thread_id/subscription setThreadSubscription
 * @apiName setThreadSubscription
 * @apiDescription This lets you subscribe or unsubscribe from a conversation.

<a href="https://developer.github.com/v3/activity/notifications/#set-a-thread-subscription">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {integer} thread_id  
 * @apiParam {boolean} [ignored="false"]  Unsubscribes and subscribes you to a conversation. Set `ignored` to `true` to block all notifications from this thread.
 * @apiExample {js} async/await
 * const result = await octokit.activity.setThreadSubscription({thread_id, ignored})
 * @apiExample {js} Promise
 * octokit.activity.setThreadSubscription({thread_id, ignored}).then(result => {})
 */


/**
 * @api {DELETE} /notifications/threads/:thread_id/subscription deleteThreadSubscription
 * @apiName deleteThreadSubscription
 * @apiDescription Mutes all future notifications for a conversation until you comment on the thread or get **@mention**ed.

<a href="https://developer.github.com/v3/activity/notifications/#delete-a-thread-subscription">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {integer} thread_id  
 * @apiExample {js} async/await
 * const result = await octokit.activity.deleteThreadSubscription({thread_id})
 * @apiExample {js} Promise
 * octokit.activity.deleteThreadSubscription({thread_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/stargazers listStargazersForRepo
 * @apiName listStargazersForRepo
 * @apiDescription You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:

<a href="https://developer.github.com/v3/activity/starring/#list-stargazers">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listStargazersForRepo({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listStargazersForRepo({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /users/:username/starred listReposStarredByUser
 * @apiName listReposStarredByUser
 * @apiDescription You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:

<a href="https://developer.github.com/v3/activity/starring/#list-repositories-being-starred">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {string=created,updated} [sort="created"]  One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
 * @apiParam {string=asc,desc} [direction="desc"]  One of `asc` (ascending) or `desc` (descending).
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listReposStarredByUser({username, sort, direction, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listReposStarredByUser({username, sort, direction, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/starred listReposStarredByAuthenticatedUser
 * @apiName listReposStarredByAuthenticatedUser
 * @apiDescription You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:

<a href="https://developer.github.com/v3/activity/starring/#list-repositories-being-starred">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string=created,updated} [sort="created"]  One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
 * @apiParam {string=asc,desc} [direction="desc"]  One of `asc` (ascending) or `desc` (descending).
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listReposStarredByAuthenticatedUser({sort, direction, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listReposStarredByAuthenticatedUser({sort, direction, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/starred/:owner/:repo checkStarringRepo
 * @apiName checkStarringRepo
 * @apiDescription Requires for the user to be authenticated.

<a href="https://developer.github.com/v3/activity/starring/#check-if-you-are-starring-a-repository">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.activity.checkStarringRepo({owner, repo})
 * @apiExample {js} Promise
 * octokit.activity.checkStarringRepo({owner, repo}).then(result => {})
 */


/**
 * @api {PUT} /user/starred/:owner/:repo starRepo
 * @apiName starRepo
 * @apiDescription Requires for the user to be authenticated.

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

<a href="https://developer.github.com/v3/activity/starring/#star-a-repository">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.activity.starRepo({owner, repo})
 * @apiExample {js} Promise
 * octokit.activity.starRepo({owner, repo}).then(result => {})
 */


/**
 * @api {DELETE} /user/starred/:owner/:repo unstarRepo
 * @apiName unstarRepo
 * @apiDescription Requires for the user to be authenticated.

<a href="https://developer.github.com/v3/activity/starring/#unstar-a-repository">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.activity.unstarRepo({owner, repo})
 * @apiExample {js} Promise
 * octokit.activity.unstarRepo({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/subscribers listWatchersForRepo
 * @apiName listWatchersForRepo
 * @apiDescription <a href="https://developer.github.com/v3/activity/watching/#list-watchers">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listWatchersForRepo({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listWatchersForRepo({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /users/:username/subscriptions listReposWatchedByUser
 * @apiName listReposWatchedByUser
 * @apiDescription <a href="https://developer.github.com/v3/activity/watching/#list-repositories-being-watched">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} username  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listReposWatchedByUser({username, per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listReposWatchedByUser({username, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/subscriptions listWatchedReposForAuthenticatedUser
 * @apiName listWatchedReposForAuthenticatedUser
 * @apiDescription <a href="https://developer.github.com/v3/activity/watching/#list-repositories-being-watched">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.activity.listWatchedReposForAuthenticatedUser({per_page, page})
 * @apiExample {js} Promise
 * octokit.activity.listWatchedReposForAuthenticatedUser({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/subscription getRepoSubscription
 * @apiName getRepoSubscription
 * @apiDescription <a href="https://developer.github.com/v3/activity/watching/#get-a-repository-subscription">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.activity.getRepoSubscription({owner, repo})
 * @apiExample {js} Promise
 * octokit.activity.getRepoSubscription({owner, repo}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/subscription setRepoSubscription
 * @apiName setRepoSubscription
 * @apiDescription If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](#delete-a-repository-subscription) completely.

<a href="https://developer.github.com/v3/activity/watching/#set-a-repository-subscription">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {boolean} [subscribed]  Determines if notifications should be received from this repository.
 * @apiParam {boolean} [ignored]  Determines if all notifications should be blocked from this repository.
 * @apiExample {js} async/await
 * const result = await octokit.activity.setRepoSubscription({owner, repo, subscribed, ignored})
 * @apiExample {js} Promise
 * octokit.activity.setRepoSubscription({owner, repo, subscribed, ignored}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/subscription deleteRepoSubscription
 * @apiName deleteRepoSubscription
 * @apiDescription This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](#set-a-repository-subscription).

<a href="https://developer.github.com/v3/activity/watching/#delete-a-repository-subscription">REST API doc</a>
 * @apiGroup Activity
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.activity.deleteRepoSubscription({owner, repo})
 * @apiExample {js} Promise
 * octokit.activity.deleteRepoSubscription({owner, repo}).then(result => {})
 */



/**,
 * Apps
 * @namespace Apps
 */


/**
 * @api {GET} /apps/:app_slug getBySlug
 * @apiName getBySlug
 * @apiDescription **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

<a href="https://developer.github.com/v3/apps/#get-a-single-github-app">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {string} app_slug  
 * @apiExample {js} async/await
 * const result = await octokit.apps.getBySlug({app_slug})
 * @apiExample {js} Promise
 * octokit.apps.getBySlug({app_slug}).then(result => {})
 */


/**
 * @api {GET} /app getAuthenticated
 * @apiName getAuthenticated
 * @apiDescription Returns the GitHub App associated with the authentication credentials used.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

<a href="https://developer.github.com/v3/apps/#get-the-authenticated-github-app">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiExample {js} async/await
 * const result = await octokit.apps.getAuthenticated({})
 * @apiExample {js} Promise
 * octokit.apps.getAuthenticated({}).then(result => {})
 */


/**
 * @api {GET} /app/installations listInstallations
 * @apiName listInstallations
 * @apiDescription You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

<a href="https://developer.github.com/v3/apps/#find-installations">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.apps.listInstallations({per_page, page})
 * @apiExample {js} Promise
 * octokit.apps.listInstallations({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /app/installations/:installation_id getInstallation
 * @apiName getInstallation
 * @apiDescription You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

<a href="https://developer.github.com/v3/apps/#get-a-single-installation">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} installation_id  
 * @apiExample {js} async/await
 * const result = await octokit.apps.getInstallation({installation_id})
 * @apiExample {js} Promise
 * octokit.apps.getInstallation({installation_id}).then(result => {})
 */


/**
 * @api {GET} /user/installations listInstallationsForAuthenticatedUser
 * @apiName listInstallationsForAuthenticatedUser
 * @apiDescription Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

The permissions the installation has are included under the `permissions` key.

<a href="https://developer.github.com/v3/apps/#list-installations-for-user">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.apps.listInstallationsForAuthenticatedUser({per_page, page})
 * @apiExample {js} Promise
 * octokit.apps.listInstallationsForAuthenticatedUser({per_page, page}).then(result => {})
 */


/**
 * @api {POST} /app/installations/:installation_id/access_tokens createInstallationToken
 * @apiName createInstallationToken
 * @apiDescription Creates an access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

<a href="https://developer.github.com/v3/apps/#create-a-new-installation-token">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} installation_id  
 * @apiExample {js} async/await
 * const result = await octokit.apps.createInstallationToken({installation_id})
 * @apiExample {js} Promise
 * octokit.apps.createInstallationToken({installation_id}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/installation findOrgInstallation
 * @apiName findOrgInstallation
 * @apiDescription Enables an authenticated GitHub App to find the organization's installation information.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

<a href="https://developer.github.com/v3/apps/#find-organization-installation">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {string} org  
 * @apiExample {js} async/await
 * const result = await octokit.apps.findOrgInstallation({org})
 * @apiExample {js} Promise
 * octokit.apps.findOrgInstallation({org}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/installation findRepoInstallation
 * @apiName findRepoInstallation
 * @apiDescription Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

<a href="https://developer.github.com/v3/apps/#find-repository-installation">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.apps.findRepoInstallation({owner, repo})
 * @apiExample {js} Promise
 * octokit.apps.findRepoInstallation({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /users/:username/installation findUserInstallation
 * @apiName findUserInstallation
 * @apiDescription Enables an authenticated GitHub App to find the user’s installation information.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

<a href="https://developer.github.com/v3/apps/#find-user-installation">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.apps.findUserInstallation({username})
 * @apiExample {js} Promise
 * octokit.apps.findUserInstallation({username}).then(result => {})
 */


/**
 * @api {POST} /app-manifests/:code/conversions createFromManifest
 * @apiName createFromManifest
 * @apiDescription Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://developer.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

<a href="https://developer.github.com/v3/apps/#create-a-github-app-from-a-manifest">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {string} code  
 * @apiExample {js} async/await
 * const result = await octokit.apps.createFromManifest({code})
 * @apiExample {js} Promise
 * octokit.apps.createFromManifest({code}).then(result => {})
 */


/**
 * @api {POST} /content_references/:content_reference_id/attachments createContentAttachment
 * @apiName createContentAttachment
 * @apiDescription Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` of the content reference from the [`content_reference` event](https://developer.github.com/v3/activity/events/types/#contentreferenceevent) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://developer.github.com/apps/using-content-attachments/)" for details about content attachments.

You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

This example creates a content attachment for the domain `https://errors.ai/`.

<a href="https://developer.github.com/v3/apps/#create-a-content-attachment">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} content_reference_id  
 * @apiParam {string} title  The title of the content attachment displayed in the body or comment of an issue or pull request.
 * @apiParam {string} body  The body text of the content attachment displayed in the body or comment of an issue or pull request. This parameter supports markdown.
 * @apiExample {js} async/await
 * const result = await octokit.apps.createContentAttachment({content_reference_id, title, body})
 * @apiExample {js} Promise
 * octokit.apps.createContentAttachment({content_reference_id, title, body}).then(result => {})
 */


/**
 * @api {GET} /installation/repositories listRepos
 * @apiName listRepos
 * @apiDescription List repositories that an installation can access.

You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

<a href="https://developer.github.com/v3/apps/installations/#list-repositories">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.apps.listRepos({per_page, page})
 * @apiExample {js} Promise
 * octokit.apps.listRepos({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/installations/:installation_id/repositories listInstallationReposForAuthenticatedUser
 * @apiName listInstallationReposForAuthenticatedUser
 * @apiDescription List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

<a href="https://developer.github.com/v3/apps/installations/#list-repositories-accessible-to-the-user-for-an-installation">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} installation_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.apps.listInstallationReposForAuthenticatedUser({installation_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.apps.listInstallationReposForAuthenticatedUser({installation_id, per_page, page}).then(result => {})
 */


/**
 * @api {PUT} /user/installations/:installation_id/repositories/:repository_id addRepoToInstallation
 * @apiName addRepoToInstallation
 * @apiDescription Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization)) or [Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication) to access this endpoint.

<a href="https://developer.github.com/v3/apps/installations/#add-repository-to-installation">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} installation_id  
 * @apiParam {integer} repository_id  
 * @apiExample {js} async/await
 * const result = await octokit.apps.addRepoToInstallation({installation_id, repository_id})
 * @apiExample {js} Promise
 * octokit.apps.addRepoToInstallation({installation_id, repository_id}).then(result => {})
 */


/**
 * @api {DELETE} /user/installations/:installation_id/repositories/:repository_id removeRepoFromInstallation
 * @apiName removeRepoFromInstallation
 * @apiDescription Remove a single repository from an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization)) or [Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication) to access this endpoint.

<a href="https://developer.github.com/v3/apps/installations/#remove-repository-from-installation">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} installation_id  
 * @apiParam {integer} repository_id  
 * @apiExample {js} async/await
 * const result = await octokit.apps.removeRepoFromInstallation({installation_id, repository_id})
 * @apiExample {js} Promise
 * octokit.apps.removeRepoFromInstallation({installation_id, repository_id}).then(result => {})
 */


/**
 * @api {GET} /marketplace_listing/plans listPlans
 * @apiName listPlans
 * @apiDescription GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.

<a href="https://developer.github.com/v3/apps/marketplace/#list-all-plans-for-your-marketplace-listing">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.apps.listPlans({per_page, page})
 * @apiExample {js} Promise
 * octokit.apps.listPlans({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /marketplace_listing/stubbed/plans listPlansStubbed
 * @apiName listPlansStubbed
 * @apiDescription GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.

<a href="https://developer.github.com/v3/apps/marketplace/#list-all-plans-for-your-marketplace-listing">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.apps.listPlansStubbed({per_page, page})
 * @apiExample {js} Promise
 * octokit.apps.listPlansStubbed({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /marketplace_listing/plans/:plan_id/accounts listAccountsUserOrOrgOnPlan
 * @apiName listAccountsUserOrOrgOnPlan
 * @apiDescription Returns any accounts associated with a plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.

<a href="https://developer.github.com/v3/apps/marketplace/#list-all-github-accounts-user-or-organization-on-a-specific-plan">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} plan_id  
 * @apiParam {string=created,updated} [sort="created"]  Sorts the GitHub accounts by the date they were created or last updated. Can be one of `created` or `updated`.
 * @apiParam {string=asc,desc} [direction]  To return the oldest accounts first, set to `asc`. Can be one of `asc` or `desc`. Ignored without the `sort` parameter.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.apps.listAccountsUserOrOrgOnPlan({plan_id, sort, direction, per_page, page})
 * @apiExample {js} Promise
 * octokit.apps.listAccountsUserOrOrgOnPlan({plan_id, sort, direction, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /marketplace_listing/stubbed/plans/:plan_id/accounts listAccountsUserOrOrgOnPlanStubbed
 * @apiName listAccountsUserOrOrgOnPlanStubbed
 * @apiDescription Returns any accounts associated with a plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.

<a href="https://developer.github.com/v3/apps/marketplace/#list-all-github-accounts-user-or-organization-on-a-specific-plan">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} plan_id  
 * @apiParam {string=created,updated} [sort="created"]  Sorts the GitHub accounts by the date they were created or last updated. Can be one of `created` or `updated`.
 * @apiParam {string=asc,desc} [direction]  To return the oldest accounts first, set to `asc`. Can be one of `asc` or `desc`. Ignored without the `sort` parameter.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.apps.listAccountsUserOrOrgOnPlanStubbed({plan_id, sort, direction, per_page, page})
 * @apiExample {js} Promise
 * octokit.apps.listAccountsUserOrOrgOnPlanStubbed({plan_id, sort, direction, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /marketplace_listing/accounts/:account_id checkAccountIsAssociatedWithAny
 * @apiName checkAccountIsAssociatedWithAny
 * @apiDescription Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.

<a href="https://developer.github.com/v3/apps/marketplace/#check-if-a-github-account-is-associated-with-any-marketplace-listing">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} account_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.apps.checkAccountIsAssociatedWithAny({account_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.apps.checkAccountIsAssociatedWithAny({account_id, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /marketplace_listing/stubbed/accounts/:account_id checkAccountIsAssociatedWithAnyStubbed
 * @apiName checkAccountIsAssociatedWithAnyStubbed
 * @apiDescription Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.

<a href="https://developer.github.com/v3/apps/marketplace/#check-if-a-github-account-is-associated-with-any-marketplace-listing">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} account_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.apps.checkAccountIsAssociatedWithAnyStubbed({account_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.apps.checkAccountIsAssociatedWithAnyStubbed({account_id, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/marketplace_purchases listMarketplacePurchasesForAuthenticatedUser
 * @apiName listMarketplacePurchasesForAuthenticatedUser
 * @apiDescription Returns only active subscriptions. You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/).

<a href="https://developer.github.com/v3/apps/marketplace/#get-a-users-marketplace-purchases">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.apps.listMarketplacePurchasesForAuthenticatedUser({per_page, page})
 * @apiExample {js} Promise
 * octokit.apps.listMarketplacePurchasesForAuthenticatedUser({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/marketplace_purchases/stubbed listMarketplacePurchasesForAuthenticatedUserStubbed
 * @apiName listMarketplacePurchasesForAuthenticatedUserStubbed
 * @apiDescription Returns only active subscriptions. You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/).

<a href="https://developer.github.com/v3/apps/marketplace/#get-a-users-marketplace-purchases">REST API doc</a>
 * @apiGroup Apps
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.apps.listMarketplacePurchasesForAuthenticatedUserStubbed({per_page, page})
 * @apiExample {js} Promise
 * octokit.apps.listMarketplacePurchasesForAuthenticatedUserStubbed({per_page, page}).then(result => {})
 */



/**,
 * Checks
 * @namespace Checks
 */


/**
 * @api {POST} /repos/:owner/:repo/check-runs create
 * @apiName create
 * @apiDescription Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.

<a href="https://developer.github.com/v3/checks/runs/#create-a-check-run">REST API doc</a>
 * @apiGroup Checks
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} name  The name of the check. For example, "code-coverage".
 * @apiParam {string} head_sha  The SHA of the commit.
 * @apiParam {string} [details_url]  The URL of the integrator's site that has the full details of the check.
 * @apiParam {string} [external_id]  A reference for the run on the integrator's system.
 * @apiParam {string=queued,in_progress,completed} [status="queued"]  The current status. Can be one of `queued`, `in_progress`, or `completed`.
 * @apiParam {string} [started_at]  The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {string=success,failure,neutral,cancelled,timed_out,action_required} [conclusion]  **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `timed_out`, or `action_required`. When the conclusion is `action_required`, additional details should be provided on the site specified by `details_url`.  
**Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`.
 * @apiParam {string} [completed_at]  **Required if you provide `conclusion`**. The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {object} [output]  Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](#output-object) description.
 * @apiParam {string} output:title  The title of the check run.
 * @apiParam {string} output:summary  The summary of the check run. This parameter supports Markdown.
 * @apiParam {string} [output:text]  The details of the check run. This parameter supports Markdown.
 * @apiParam {object[]} [output:annotations]  Adds information from your analysis to specific lines of code. Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull request. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://developer.github.com/v3/checks/runs/#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about how you can view annotations on GitHub, see "[About status checks](https://help.github.com/articles/about-status-checks#checks)". See the [`annotations` object](#annotations-object) description for details about how to use this parameter.
 * @apiParam {string} output:annotations:path  The path of the file to add an annotation to. For example, `assets/css/main.css`.
 * @apiParam {integer} output:annotations:start_line  The start line of the annotation.
 * @apiParam {integer} output:annotations:end_line  The end line of the annotation.
 * @apiParam {integer} [output:annotations:start_column]  The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
 * @apiParam {integer} [output:annotations:end_column]  The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
 * @apiParam {string=notice,warning,failure} output:annotations:annotation_level  The level of the annotation. Can be one of `notice`, `warning`, or `failure`.
 * @apiParam {string} output:annotations:message  A short description of the feedback for these lines of code. The maximum size is 64 KB.
 * @apiParam {string} [output:annotations:title]  The title that represents the annotation. The maximum size is 255 characters.
 * @apiParam {string} [output:annotations:raw_details]  Details about this annotation. The maximum size is 64 KB.
 * @apiParam {object[]} [output:images]  Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](#images-object) description for details.
 * @apiParam {string} output:images:alt  The alternative text for the image.
 * @apiParam {string} output:images:image_url  The full URL of the image.
 * @apiParam {string} [output:images:caption]  A short image description.
 * @apiParam {object[]} [actions]  Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](#actions-object) description.
 * @apiParam {string} actions:label  The text to be displayed on a button in the web UI. The maximum size is 20 characters.
 * @apiParam {string} actions:description  A short explanation of what this action would do. The maximum size is 40 characters.
 * @apiParam {string} actions:identifier  A reference for the action on the integrator's system. The maximum size is 20 characters.
 * @apiExample {js} async/await
 * const result = await octokit.checks.create({owner, repo, name, head_sha, details_url, external_id, status, started_at, conclusion, completed_at, output, output.title, output.summary, output.text, output.annotations, output.annotations[].path, output.annotations[].start_line, output.annotations[].end_line, output.annotations[].start_column, output.annotations[].end_column, output.annotations[].annotation_level, output.annotations[].message, output.annotations[].title, output.annotations[].raw_details, output.images, output.images[].alt, output.images[].image_url, output.images[].caption, actions, actions[].label, actions[].description, actions[].identifier})
 * @apiExample {js} Promise
 * octokit.checks.create({owner, repo, name, head_sha, details_url, external_id, status, started_at, conclusion, completed_at, output, output.title, output.summary, output.text, output.annotations, output.annotations[].path, output.annotations[].start_line, output.annotations[].end_line, output.annotations[].start_column, output.annotations[].end_column, output.annotations[].annotation_level, output.annotations[].message, output.annotations[].title, output.annotations[].raw_details, output.images, output.images[].alt, output.images[].image_url, output.images[].caption, actions, actions[].label, actions[].description, actions[].identifier}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/check-runs/:check_run_id update
 * @apiName update
 * @apiDescription Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.

<a href="https://developer.github.com/v3/checks/runs/#update-a-check-run">REST API doc</a>
 * @apiGroup Checks
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} check_run_id  
 * @apiParam {string} [name]  The name of the check. For example, "code-coverage".
 * @apiParam {string} [details_url]  The URL of the integrator's site that has the full details of the check.
 * @apiParam {string} [external_id]  A reference for the run on the integrator's system.
 * @apiParam {string} [started_at]  This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {string=queued,in_progress,completed} [status]  The current status. Can be one of `queued`, `in_progress`, or `completed`.
 * @apiParam {string=success,failure,neutral,cancelled,timed_out,action_required} [conclusion]  **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `timed_out`, or `action_required`.  
**Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`.
 * @apiParam {string} [completed_at]  **Required if you provide `conclusion`**. The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {object} [output]  Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](#output-object-1) description.
 * @apiParam {string} [output:title]  **Required**.
 * @apiParam {string} output:summary  Can contain Markdown.
 * @apiParam {string} [output:text]  Can contain Markdown.
 * @apiParam {object[]} [output:annotations]  Adds information from your analysis to specific lines of code. Annotations are visible in GitHub's pull request UI. Annotations are visible in GitHub's pull request UI. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://developer.github.com/v3/checks/runs/#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about annotations in the UI, see "[About status checks](https://help.github.com/articles/about-status-checks#checks)". See the [`annotations` object](#annotations-object-1) description for details.
 * @apiParam {string} output:annotations:path  The path of the file to add an annotation to. For example, `assets/css/main.css`.
 * @apiParam {integer} output:annotations:start_line  The start line of the annotation.
 * @apiParam {integer} output:annotations:end_line  The end line of the annotation.
 * @apiParam {integer} [output:annotations:start_column]  The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
 * @apiParam {integer} [output:annotations:end_column]  The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
 * @apiParam {string=notice,warning,failure} output:annotations:annotation_level  The level of the annotation. Can be one of `notice`, `warning`, or `failure`.
 * @apiParam {string} output:annotations:message  A short description of the feedback for these lines of code. The maximum size is 64 KB.
 * @apiParam {string} [output:annotations:title]  The title that represents the annotation. The maximum size is 255 characters.
 * @apiParam {string} [output:annotations:raw_details]  Details about this annotation. The maximum size is 64 KB.
 * @apiParam {object[]} [output:images]  Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](#annotations-object-1) description for details.
 * @apiParam {string} output:images:alt  The alternative text for the image.
 * @apiParam {string} output:images:image_url  The full URL of the image.
 * @apiParam {string} [output:images:caption]  A short image description.
 * @apiParam {object[]} [actions]  Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](#actions-object) description.
 * @apiParam {string} actions:label  The text to be displayed on a button in the web UI. The maximum size is 20 characters.
 * @apiParam {string} actions:description  A short explanation of what this action would do. The maximum size is 40 characters.
 * @apiParam {string} actions:identifier  A reference for the action on the integrator's system. The maximum size is 20 characters.
 * @apiExample {js} async/await
 * const result = await octokit.checks.update({owner, repo, check_run_id, name, details_url, external_id, started_at, status, conclusion, completed_at, output, output.title, output.summary, output.text, output.annotations, output.annotations[].path, output.annotations[].start_line, output.annotations[].end_line, output.annotations[].start_column, output.annotations[].end_column, output.annotations[].annotation_level, output.annotations[].message, output.annotations[].title, output.annotations[].raw_details, output.images, output.images[].alt, output.images[].image_url, output.images[].caption, actions, actions[].label, actions[].description, actions[].identifier})
 * @apiExample {js} Promise
 * octokit.checks.update({owner, repo, check_run_id, name, details_url, external_id, started_at, status, conclusion, completed_at, output, output.title, output.summary, output.text, output.annotations, output.annotations[].path, output.annotations[].start_line, output.annotations[].end_line, output.annotations[].start_column, output.annotations[].end_column, output.annotations[].annotation_level, output.annotations[].message, output.annotations[].title, output.annotations[].raw_details, output.images, output.images[].alt, output.images[].image_url, output.images[].caption, actions, actions[].label, actions[].description, actions[].identifier}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits/:ref/check-runs listForRef
 * @apiName listForRef
 * @apiDescription Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

<a href="https://developer.github.com/v3/checks/runs/#list-check-runs-for-a-specific-ref">REST API doc</a>
 * @apiGroup Checks
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  
 * @apiParam {string} [check_name]  Returns check runs with the specified `name`.
 * @apiParam {string=queued,in_progress,completed} [status]  Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
 * @apiParam {string=latest,all} [filter="latest"]  Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.checks.listForRef({owner, repo, ref, check_name, status, filter, per_page, page})
 * @apiExample {js} Promise
 * octokit.checks.listForRef({owner, repo, ref, check_name, status, filter, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/check-suites/:check_suite_id/check-runs listForSuite
 * @apiName listForSuite
 * @apiDescription Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

<a href="https://developer.github.com/v3/checks/runs/#list-check-runs-in-a-check-suite">REST API doc</a>
 * @apiGroup Checks
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} check_suite_id  
 * @apiParam {string} [check_name]  Returns check runs with the specified `name`.
 * @apiParam {string=queued,in_progress,completed} [status]  Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
 * @apiParam {string=latest,all} [filter="latest"]  Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.checks.listForSuite({owner, repo, check_suite_id, check_name, status, filter, per_page, page})
 * @apiExample {js} Promise
 * octokit.checks.listForSuite({owner, repo, check_suite_id, check_name, status, filter, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/check-runs/:check_run_id get
 * @apiName get
 * @apiDescription Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

<a href="https://developer.github.com/v3/checks/runs/#get-a-single-check-run">REST API doc</a>
 * @apiGroup Checks
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} check_run_id  
 * @apiExample {js} async/await
 * const result = await octokit.checks.get({owner, repo, check_run_id})
 * @apiExample {js} Promise
 * octokit.checks.get({owner, repo, check_run_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/check-runs/:check_run_id/annotations listAnnotations
 * @apiName listAnnotations
 * @apiDescription Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.

<a href="https://developer.github.com/v3/checks/runs/#list-annotations-for-a-check-run">REST API doc</a>
 * @apiGroup Checks
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} check_run_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.checks.listAnnotations({owner, repo, check_run_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.checks.listAnnotations({owner, repo, check_run_id, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/check-suites/:check_suite_id getSuite
 * @apiName getSuite
 * @apiDescription Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

<a href="https://developer.github.com/v3/checks/suites/#get-a-single-check-suite">REST API doc</a>
 * @apiGroup Checks
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} check_suite_id  
 * @apiExample {js} async/await
 * const result = await octokit.checks.getSuite({owner, repo, check_suite_id})
 * @apiExample {js} Promise
 * octokit.checks.getSuite({owner, repo, check_suite_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits/:ref/check-suites listSuitesForRef
 * @apiName listSuitesForRef
 * @apiDescription Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

<a href="https://developer.github.com/v3/checks/suites/#list-check-suites-for-a-specific-ref">REST API doc</a>
 * @apiGroup Checks
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  
 * @apiParam {integer} [app_id]  Filters check suites by GitHub App `id`.
 * @apiParam {string} [check_name]  Filters checks suites by the name of the [check run](https://developer.github.com/v3/checks/runs/).
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.checks.listSuitesForRef({owner, repo, ref, app_id, check_name, per_page, page})
 * @apiExample {js} Promise
 * octokit.checks.listSuitesForRef({owner, repo, ref, app_id, check_name, per_page, page}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/check-suites/preferences setSuitesPreferences
 * @apiName setSuitesPreferences
 * @apiDescription Changes the default automatic flow when creating check suites. By default, the CheckSuiteEvent is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://developer.github.com/v3/checks/suites/#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.

<a href="https://developer.github.com/v3/checks/suites/#set-preferences-for-check-suites-on-a-repository">REST API doc</a>
 * @apiGroup Checks
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {object[]} [auto_trigger_checks]  Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the [`auto_trigger_checks` object](#auto_trigger_checks-object) description for details.
 * @apiParam {integer} auto_trigger_checks:app_id  The `id` of the GitHub App.
 * @apiParam {boolean} auto_trigger_checks:setting="true"  Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.
 * @apiExample {js} async/await
 * const result = await octokit.checks.setSuitesPreferences({owner, repo, auto_trigger_checks, auto_trigger_checks[].app_id, auto_trigger_checks[].setting})
 * @apiExample {js} Promise
 * octokit.checks.setSuitesPreferences({owner, repo, auto_trigger_checks, auto_trigger_checks[].app_id, auto_trigger_checks[].setting}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/check-suites createSuite
 * @apiName createSuite
 * @apiDescription By default, check suites are automatically created when you create a [check run](https://developer.github.com/v3/checks/runs/). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Set preferences for check suites on a repository](https://developer.github.com/v3/checks/suites/#set-preferences-for-check-suites-on-a-repository)". Your GitHub App must have the `checks:write` permission to create check suites.

<a href="https://developer.github.com/v3/checks/suites/#create-a-check-suite">REST API doc</a>
 * @apiGroup Checks
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} head_sha  The sha of the head commit.
 * @apiExample {js} async/await
 * const result = await octokit.checks.createSuite({owner, repo, head_sha})
 * @apiExample {js} Promise
 * octokit.checks.createSuite({owner, repo, head_sha}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/check-suites/:check_suite_id/rerequest rerequestSuite
 * @apiName rerequestSuite
 * @apiDescription Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://developer.github.com/v3/activity/events/types/#checksuiteevent) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.

To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.

<a href="https://developer.github.com/v3/checks/suites/#rerequest-check-suite">REST API doc</a>
 * @apiGroup Checks
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} check_suite_id  
 * @apiExample {js} async/await
 * const result = await octokit.checks.rerequestSuite({owner, repo, check_suite_id})
 * @apiExample {js} Promise
 * octokit.checks.rerequestSuite({owner, repo, check_suite_id}).then(result => {})
 */



/**,
 * CodesOfConduct
 * @namespace CodesOfConduct
 */


/**
 * @api {GET} /codes_of_conduct listConductCodes
 * @apiName listConductCodes
 * @apiDescription <a href="https://developer.github.com/v3/codes_of_conduct/#list-all-codes-of-conduct">REST API doc</a>
 * @apiGroup CodesOfConduct
 *
 * @apiExample {js} async/await
 * const result = await octokit.codesOfConduct.listConductCodes({})
 * @apiExample {js} Promise
 * octokit.codesOfConduct.listConductCodes({}).then(result => {})
 */


/**
 * @api {GET} /codes_of_conduct/:key getConductCode
 * @apiName getConductCode
 * @apiDescription <a href="https://developer.github.com/v3/codes_of_conduct/#get-an-individual-code-of-conduct">REST API doc</a>
 * @apiGroup CodesOfConduct
 *
 * @apiParam {string} key  
 * @apiExample {js} async/await
 * const result = await octokit.codesOfConduct.getConductCode({key})
 * @apiExample {js} Promise
 * octokit.codesOfConduct.getConductCode({key}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/community/code_of_conduct getForRepo
 * @apiName getForRepo
 * @apiDescription This method returns the contents of the repository's code of conduct file, if one is detected.

<a href="https://developer.github.com/v3/codes_of_conduct/#get-the-contents-of-a-repositorys-code-of-conduct">REST API doc</a>
 * @apiGroup CodesOfConduct
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.codesOfConduct.getForRepo({owner, repo})
 * @apiExample {js} Promise
 * octokit.codesOfConduct.getForRepo({owner, repo}).then(result => {})
 */



/**,
 * Emojis
 * @namespace Emojis
 */


/**
 * @api {GET} /emojis get
 * @apiName get
 * @apiDescription Lists all the emojis available to use on GitHub.



<a href="https://developer.github.com/v3/emojis/#emojis">REST API doc</a>
 * @apiGroup Emojis
 *
 * @apiExample {js} async/await
 * const result = await octokit.emojis.get({})
 * @apiExample {js} Promise
 * octokit.emojis.get({}).then(result => {})
 */



/**,
 * Gists
 * @namespace Gists
 */


/**
 * @api {GET} /users/:username/gists listPublicForUser
 * @apiName listPublicForUser
 * @apiDescription <a href="https://developer.github.com/v3/gists/#list-a-users-gists">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} username  
 * @apiParam {string} [since]  This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Only gists updated at or after this time are returned.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.gists.listPublicForUser({username, since, per_page, page})
 * @apiExample {js} Promise
 * octokit.gists.listPublicForUser({username, since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /gists list
 * @apiName list
 * @apiDescription <a href="https://developer.github.com/v3/gists/#list-a-users-gists">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} [since]  This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Only gists updated at or after this time are returned.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.gists.list({since, per_page, page})
 * @apiExample {js} Promise
 * octokit.gists.list({since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /gists/public listPublic
 * @apiName listPublic
 * @apiDescription List all public gists sorted by most recently updated to least recently updated.

Note: With [pagination](https://developer.github.com/v3/#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.

<a href="https://developer.github.com/v3/gists/#list-all-public-gists">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} [since]  This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Only gists updated at or after this time are returned.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.gists.listPublic({since, per_page, page})
 * @apiExample {js} Promise
 * octokit.gists.listPublic({since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /gists/starred listStarred
 * @apiName listStarred
 * @apiDescription List the authenticated user's starred gists:

<a href="https://developer.github.com/v3/gists/#list-starred-gists">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} [since]  This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Only gists updated at or after this time are returned.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.gists.listStarred({since, per_page, page})
 * @apiExample {js} Promise
 * octokit.gists.listStarred({since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /gists/:gist_id get
 * @apiName get
 * @apiDescription <a href="https://developer.github.com/v3/gists/#get-a-single-gist">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.get({gist_id})
 * @apiExample {js} Promise
 * octokit.gists.get({gist_id}).then(result => {})
 */


/**
 * @api {GET} /gists/:gist_id/:sha getRevision
 * @apiName getRevision
 * @apiDescription <a href="https://developer.github.com/v3/gists/#get-a-specific-revision-of-a-gist">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiParam {string} sha  
 * @apiExample {js} async/await
 * const result = await octokit.gists.getRevision({gist_id, sha})
 * @apiExample {js} Promise
 * octokit.gists.getRevision({gist_id, sha}).then(result => {})
 */


/**
 * @api {POST} /gists create
 * @apiName create
 * @apiDescription Allows you to add a new gist with one or more files.

**Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.

<a href="https://developer.github.com/v3/gists/#create-a-gist">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {object} files  The filenames and content of each file in the gist. The keys in the `files` object represent the filename and have the type `string`.
 * @apiParam {string} [files:content]  The content of the file.
 * @apiParam {string} [description]  A descriptive name for this gist.
 * @apiParam {boolean} [public="false"]  When `true`, the gist will be public and available for anyone to see.
 * @apiExample {js} async/await
 * const result = await octokit.gists.create({files, files.content, description, public})
 * @apiExample {js} Promise
 * octokit.gists.create({files, files.content, description, public}).then(result => {})
 */


/**
 * @api {PATCH} /gists/:gist_id update
 * @apiName update
 * @apiDescription Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.

<a href="https://developer.github.com/v3/gists/#edit-a-gist">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiParam {string} [description]  A descriptive name for this gist.
 * @apiParam {object} [files]  The filenames and content that make up this gist.
 * @apiParam {string} [files:content]  The updated content of the file.
 * @apiParam {string} [files:filename]  The new name for this file. To delete a file, set the value of the filename to `null`.
 * @apiExample {js} async/await
 * const result = await octokit.gists.update({gist_id, description, files, files.content, files.filename})
 * @apiExample {js} Promise
 * octokit.gists.update({gist_id, description, files, files.content, files.filename}).then(result => {})
 */


/**
 * @api {GET} /gists/:gist_id/commits listCommits
 * @apiName listCommits
 * @apiDescription <a href="https://developer.github.com/v3/gists/#list-gist-commits">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.gists.listCommits({gist_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.gists.listCommits({gist_id, per_page, page}).then(result => {})
 */


/**
 * @api {PUT} /gists/:gist_id/star star
 * @apiName star
 * @apiDescription Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

<a href="https://developer.github.com/v3/gists/#star-a-gist">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.star({gist_id})
 * @apiExample {js} Promise
 * octokit.gists.star({gist_id}).then(result => {})
 */


/**
 * @api {DELETE} /gists/:gist_id/star unstar
 * @apiName unstar
 * @apiDescription <a href="https://developer.github.com/v3/gists/#unstar-a-gist">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.unstar({gist_id})
 * @apiExample {js} Promise
 * octokit.gists.unstar({gist_id}).then(result => {})
 */


/**
 * @api {GET} /gists/:gist_id/star checkIsStarred
 * @apiName checkIsStarred
 * @apiDescription <a href="https://developer.github.com/v3/gists/#check-if-a-gist-is-starred">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.checkIsStarred({gist_id})
 * @apiExample {js} Promise
 * octokit.gists.checkIsStarred({gist_id}).then(result => {})
 */


/**
 * @api {POST} /gists/:gist_id/forks fork
 * @apiName fork
 * @apiDescription **Note**: This was previously `/gists/:gist_id/fork`.

<a href="https://developer.github.com/v3/gists/#fork-a-gist">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.fork({gist_id})
 * @apiExample {js} Promise
 * octokit.gists.fork({gist_id}).then(result => {})
 */


/**
 * @api {GET} /gists/:gist_id/forks listForks
 * @apiName listForks
 * @apiDescription <a href="https://developer.github.com/v3/gists/#list-gist-forks">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.gists.listForks({gist_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.gists.listForks({gist_id, per_page, page}).then(result => {})
 */


/**
 * @api {DELETE} /gists/:gist_id delete
 * @apiName delete
 * @apiDescription <a href="https://developer.github.com/v3/gists/#delete-a-gist">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.delete({gist_id})
 * @apiExample {js} Promise
 * octokit.gists.delete({gist_id}).then(result => {})
 */


/**
 * @api {GET} /gists/:gist_id/comments listComments
 * @apiName listComments
 * @apiDescription <a href="https://developer.github.com/v3/gists/comments/#list-comments-on-a-gist">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.gists.listComments({gist_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.gists.listComments({gist_id, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /gists/:gist_id/comments/:comment_id getComment
 * @apiName getComment
 * @apiDescription <a href="https://developer.github.com/v3/gists/comments/#get-a-single-comment">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiParam {integer} comment_id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.getComment({gist_id, comment_id})
 * @apiExample {js} Promise
 * octokit.gists.getComment({gist_id, comment_id}).then(result => {})
 */


/**
 * @api {POST} /gists/:gist_id/comments createComment
 * @apiName createComment
 * @apiDescription <a href="https://developer.github.com/v3/gists/comments/#create-a-comment">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiParam {string} body  The comment text.
 * @apiExample {js} async/await
 * const result = await octokit.gists.createComment({gist_id, body})
 * @apiExample {js} Promise
 * octokit.gists.createComment({gist_id, body}).then(result => {})
 */


/**
 * @api {PATCH} /gists/:gist_id/comments/:comment_id updateComment
 * @apiName updateComment
 * @apiDescription <a href="https://developer.github.com/v3/gists/comments/#edit-a-comment">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiParam {integer} comment_id  
 * @apiParam {string} body  The comment text.
 * @apiExample {js} async/await
 * const result = await octokit.gists.updateComment({gist_id, comment_id, body})
 * @apiExample {js} Promise
 * octokit.gists.updateComment({gist_id, comment_id, body}).then(result => {})
 */


/**
 * @api {DELETE} /gists/:gist_id/comments/:comment_id deleteComment
 * @apiName deleteComment
 * @apiDescription <a href="https://developer.github.com/v3/gists/comments/#delete-a-comment">REST API doc</a>
 * @apiGroup Gists
 *
 * @apiParam {string} gist_id  
 * @apiParam {integer} comment_id  
 * @apiExample {js} async/await
 * const result = await octokit.gists.deleteComment({gist_id, comment_id})
 * @apiExample {js} Promise
 * octokit.gists.deleteComment({gist_id, comment_id}).then(result => {})
 */



/**,
 * Git
 * @namespace Git
 */


/**
 * @api {GET} /repos/:owner/:repo/git/blobs/:file_sha getBlob
 * @apiName getBlob
 * @apiDescription The `content` in the response will always be Base64 encoded.

_Note_: This API supports blobs up to 100 megabytes in size.

<a href="https://developer.github.com/v3/git/blobs/#get-a-blob">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} file_sha  
 * @apiExample {js} async/await
 * const result = await octokit.git.getBlob({owner, repo, file_sha})
 * @apiExample {js} Promise
 * octokit.git.getBlob({owner, repo, file_sha}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/git/blobs createBlob
 * @apiName createBlob
 * @apiDescription <a href="https://developer.github.com/v3/git/blobs/#create-a-blob">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} content  The new blob's content.
 * @apiParam {string} [encoding=""utf-8""]  The encoding used for `content`. Currently, `"utf-8"` and `"base64"` are supported.
 * @apiExample {js} async/await
 * const result = await octokit.git.createBlob({owner, repo, content, encoding})
 * @apiExample {js} Promise
 * octokit.git.createBlob({owner, repo, content, encoding}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/commits/:commit_sha getCommit
 * @apiName getCommit
 * @apiDescription Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

<a href="https://developer.github.com/v3/git/commits/#get-a-commit">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} commit_sha  
 * @apiExample {js} async/await
 * const result = await octokit.git.getCommit({owner, repo, commit_sha})
 * @apiExample {js} Promise
 * octokit.git.getCommit({owner, repo, commit_sha}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/git/commits createCommit
 * @apiName createCommit
 * @apiDescription Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

The `committer` section is optional and will be filled with the `author` data if omitted. If the `author` section is omitted, it will be filled in with the authenticated user's information and the current date.

Both the `author` and `committer` parameters have the same keys:

| name  | type   | description                                                                                                                                                       |
| ----- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name  | string | The name of the author (or committer) of the commit                                                                                                               |
| email | string | The email of the author (or committer) of the commit                                                                                                              |
| date  | string | Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. |

You can also provide an optional string `signature` parameter. This value will be added to the `gpgsig` header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database.

**Note**: To pass a `signature` parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to [use the command line](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work) to create signed commits.

In this example, the payload that the signature is over would have been:



<a href="https://developer.github.com/v3/git/commits/#create-a-commit">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} message  The commit message
 * @apiParam {string} tree  The SHA of the tree object this commit points to
 * @apiParam {string[]} parents  The SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.
 * @apiParam {object} [committer]  object containing information about the committer.
 * @apiParam {object} [author]  object containing information about the author.
 * @apiExample {js} async/await
 * const result = await octokit.git.createCommit({owner, repo, message, tree, parents, committer, author})
 * @apiExample {js} Promise
 * octokit.git.createCommit({owner, repo, message, tree, parents, committer, author}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/refs/:ref getRef
 * @apiName getRef
 * @apiDescription Returns a branch or tag reference. Other than the [REST API](https://developer.github.com/v3/git/refs/#get-a-reference) it always returns a single reference. If the REST API returns with an array then the method responds with an error.

<a href="https://developer.github.com/v3/git/refs/#get-a-reference">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  Must be formatted as `heads/branch`, not just `branch`
 * @apiExample {js} async/await
 * const result = await octokit.git.getRef({owner, repo, ref})
 * @apiExample {js} Promise
 * octokit.git.getRef({owner, repo, ref}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/refs/:namespace listRefs
 * @apiName listRefs
 * @apiDescription This will return an array of all the references on the system, including things like notes and stashes if they exist on the server

<a href="https://developer.github.com/v3/git/refs/#get-all-references">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [namespace]  Filter by sub-namespace (reference prefix). Most commen examples would be `'heads/'` and `'tags/'` to retrieve branches or tags
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.git.listRefs({owner, repo, namespace, per_page, page})
 * @apiExample {js} Promise
 * octokit.git.listRefs({owner, repo, namespace, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/git/refs createRef
 * @apiName createRef
 * @apiDescription Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.

<a href="https://developer.github.com/v3/git/refs/#create-a-reference">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
 * @apiParam {string} sha  The SHA1 value for this reference.
 * @apiExample {js} async/await
 * const result = await octokit.git.createRef({owner, repo, ref, sha})
 * @apiExample {js} Promise
 * octokit.git.createRef({owner, repo, ref, sha}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/git/refs/:ref updateRef
 * @apiName updateRef
 * @apiDescription <a href="https://developer.github.com/v3/git/refs/#update-a-reference">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  
 * @apiParam {string} sha  The SHA1 value to set this reference to
 * @apiParam {boolean} [force="false"]  Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to `false` will make sure you're not overwriting work.
 * @apiExample {js} async/await
 * const result = await octokit.git.updateRef({owner, repo, ref, sha, force})
 * @apiExample {js} Promise
 * octokit.git.updateRef({owner, repo, ref, sha, force}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/git/refs/:ref deleteRef
 * @apiName deleteRef
 * @apiDescription ```
DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a
```

```
DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0
```

<a href="https://developer.github.com/v3/git/refs/#delete-a-reference">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  
 * @apiExample {js} async/await
 * const result = await octokit.git.deleteRef({owner, repo, ref})
 * @apiExample {js} Promise
 * octokit.git.deleteRef({owner, repo, ref}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/tags/:tag_sha getTag
 * @apiName getTag
 * @apiDescription <a href="https://developer.github.com/v3/git/tags/#get-a-tag">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} tag_sha  
 * @apiExample {js} async/await
 * const result = await octokit.git.getTag({owner, repo, tag_sha})
 * @apiExample {js} Promise
 * octokit.git.getTag({owner, repo, tag_sha}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/git/tags createTag
 * @apiName createTag
 * @apiDescription Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://developer.github.com/v3/git/refs/#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://developer.github.com/v3/git/refs/#create-a-reference) the tag reference - this call would be unnecessary.

<a href="https://developer.github.com/v3/git/tags/#create-a-tag-object">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} tag  The tag's name. This is typically a version (e.g., "v0.0.1").
 * @apiParam {string} message  The tag message.
 * @apiParam {string} object  The SHA of the git object this is tagging.
 * @apiParam {string=commit,tree,blob} type  The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
 * @apiParam {object} [tagger]  An object with information about the individual creating the tag.
 * @apiParam {string} [tagger:name]  The name of the author of the tag
 * @apiParam {string} [tagger:email]  The email of the author of the tag
 * @apiParam {string} [tagger:date]  When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiExample {js} async/await
 * const result = await octokit.git.createTag({owner, repo, tag, message, object, type, tagger, tagger.name, tagger.email, tagger.date})
 * @apiExample {js} Promise
 * octokit.git.createTag({owner, repo, tag, message, object, type, tagger, tagger.name, tagger.email, tagger.date}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/git/trees/:tree_sha getTree
 * @apiName getTree
 * @apiDescription If `truncated` in the response is `true`, the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, omit the `recursive` parameter, and fetch one sub-tree at a time. If you need to fetch even more items, you can clone the repository and iterate over the Git data locally.

<a href="https://developer.github.com/v3/git/trees/#get-a-tree">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} tree_sha  
 * @apiParam {integer=1} [recursive]  
 * @apiExample {js} async/await
 * const result = await octokit.git.getTree({owner, repo, tree_sha, recursive})
 * @apiExample {js} Promise
 * octokit.git.getTree({owner, repo, tree_sha, recursive}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/git/trees createTree
 * @apiName createTree
 * @apiDescription The tree creation API will take nested entries as well. If both a tree and a nested path modifying that tree are specified, it will overwrite the contents of that tree with the new path contents and write a new tree out.

<a href="https://developer.github.com/v3/git/trees/#create-a-tree">REST API doc</a>
 * @apiGroup Git
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {object[]} tree  Objects (of `path`, `mode`, `type`, and `sha`) specifying a tree structure.
 * @apiParam {string} [tree:path]  The file referenced in the tree.
 * @apiParam {string=100644,100755,040000,160000,120000} [tree:mode]  The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink.
 * @apiParam {string=blob,tree,commit} [tree:type]  Either `blob`, `tree`, or `commit`.
 * @apiParam {string} [tree:sha]  The SHA1 checksum ID of the object in the tree. Also called `tree.sha`.  
  
**Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.
 * @apiParam {string} [tree:content]  The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or `tree.sha`.  
  
**Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.
 * @apiParam {string} [base_tree]  The SHA1 of the tree you want to update with new data. If you don't set this, the commit will be created on top of everything; however, it will only contain your change, the rest of your files will show up as deleted.
 * @apiExample {js} async/await
 * const result = await octokit.git.createTree({owner, repo, tree, tree[].path, tree[].mode, tree[].type, tree[].sha, tree[].content, base_tree})
 * @apiExample {js} Promise
 * octokit.git.createTree({owner, repo, tree, tree[].path, tree[].mode, tree[].type, tree[].sha, tree[].content, base_tree}).then(result => {})
 */



/**,
 * Gitignore
 * @namespace Gitignore
 */


/**
 * @api {GET} /gitignore/templates listTemplates
 * @apiName listTemplates
 * @apiDescription List all templates available to pass as an option when [creating a repository](https://developer.github.com/v3/repos/#create).

<a href="https://developer.github.com/v3/gitignore/#listing-available-templates">REST API doc</a>
 * @apiGroup Gitignore
 *
 * @apiExample {js} async/await
 * const result = await octokit.gitignore.listTemplates({})
 * @apiExample {js} Promise
 * octokit.gitignore.listTemplates({}).then(result => {})
 */


/**
 * @api {GET} /gitignore/templates/:name getTemplate
 * @apiName getTemplate
 * @apiDescription The API also allows fetching the source of a single template.

Use the raw [media type](https://developer.github.com/v3/media/) to get the raw contents.



<a href="https://developer.github.com/v3/gitignore/#get-a-single-template">REST API doc</a>
 * @apiGroup Gitignore
 *
 * @apiParam {string} name  
 * @apiExample {js} async/await
 * const result = await octokit.gitignore.getTemplate({name})
 * @apiExample {js} Promise
 * octokit.gitignore.getTemplate({name}).then(result => {})
 */



/**,
 * Interactions
 * @namespace Interactions
 */


/**
 * @api {GET} /orgs/:org/interaction-limits getRestrictionsForOrg
 * @apiName getRestrictionsForOrg
 * @apiDescription Shows which group of GitHub users can interact with this organization and when the restriction expires. If there are no restrictions, you will see an empty response.

<a href="https://developer.github.com/v3/interactions/orgs/#get-interaction-restrictions-for-an-organization">REST API doc</a>
 * @apiGroup Interactions
 *
 * @apiParam {string} org  
 * @apiExample {js} async/await
 * const result = await octokit.interactions.getRestrictionsForOrg({org})
 * @apiExample {js} Promise
 * octokit.interactions.getRestrictionsForOrg({org}).then(result => {})
 */


/**
 * @api {PUT} /orgs/:org/interaction-limits addOrUpdateRestrictionsForOrg
 * @apiName addOrUpdateRestrictionsForOrg
 * @apiDescription Temporarily restricts interactions to certain GitHub users in any public repository in the given organization. You must be an organization owner to set these restrictions.

<a href="https://developer.github.com/v3/interactions/orgs/#add-or-update-interaction-restrictions-for-an-organization">REST API doc</a>
 * @apiGroup Interactions
 *
 * @apiParam {string} org  
 * @apiParam {string=existing_users,contributors_only,collaborators_only} limit  Specifies the group of GitHub users who can comment, open issues, or create pull requests in public repositories for the given organization. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`.
 * @apiExample {js} async/await
 * const result = await octokit.interactions.addOrUpdateRestrictionsForOrg({org, limit})
 * @apiExample {js} Promise
 * octokit.interactions.addOrUpdateRestrictionsForOrg({org, limit}).then(result => {})
 */


/**
 * @api {DELETE} /orgs/:org/interaction-limits removeRestrictionsForOrg
 * @apiName removeRestrictionsForOrg
 * @apiDescription Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.

<a href="https://developer.github.com/v3/interactions/orgs/#remove-interaction-restrictions-for-an-organization">REST API doc</a>
 * @apiGroup Interactions
 *
 * @apiParam {string} org  
 * @apiExample {js} async/await
 * const result = await octokit.interactions.removeRestrictionsForOrg({org})
 * @apiExample {js} Promise
 * octokit.interactions.removeRestrictionsForOrg({org}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/interaction-limits getRestrictionsForRepo
 * @apiName getRestrictionsForRepo
 * @apiDescription Shows which group of GitHub users can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.

<a href="https://developer.github.com/v3/interactions/repos/#get-interaction-restrictions-for-a-repository">REST API doc</a>
 * @apiGroup Interactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.interactions.getRestrictionsForRepo({owner, repo})
 * @apiExample {js} Promise
 * octokit.interactions.getRestrictionsForRepo({owner, repo}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/interaction-limits addOrUpdateRestrictionsForRepo
 * @apiName addOrUpdateRestrictionsForRepo
 * @apiDescription Temporarily restricts interactions to certain GitHub users within the given repository. You must have owner or admin access to set restrictions.

<a href="https://developer.github.com/v3/interactions/repos/#add-or-update-interaction-restrictions-for-a-repository">REST API doc</a>
 * @apiGroup Interactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=existing_users,contributors_only,collaborators_only} limit  Specifies the group of GitHub users who can comment, open issues, or create pull requests for the given repository. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`.
 * @apiExample {js} async/await
 * const result = await octokit.interactions.addOrUpdateRestrictionsForRepo({owner, repo, limit})
 * @apiExample {js} Promise
 * octokit.interactions.addOrUpdateRestrictionsForRepo({owner, repo, limit}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/interaction-limits removeRestrictionsForRepo
 * @apiName removeRestrictionsForRepo
 * @apiDescription Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions.

<a href="https://developer.github.com/v3/interactions/repos/#remove-interaction-restrictions-for-a-repository">REST API doc</a>
 * @apiGroup Interactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.interactions.removeRestrictionsForRepo({owner, repo})
 * @apiExample {js} Promise
 * octokit.interactions.removeRestrictionsForRepo({owner, repo}).then(result => {})
 */



/**,
 * Issues
 * @namespace Issues
 */


/**
 * @api {GET} /issues list
 * @apiName list
 * @apiDescription **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.

Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.



<a href="https://developer.github.com/v3/issues/#list-issues">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string=assigned,created,mentioned,subscribed,all} [filter="assigned"]  Indicates which sorts of issues to return. Can be one of:  
\* `assigned`: Issues assigned to you  
\* `created`: Issues created by you  
\* `mentioned`: Issues mentioning you  
\* `subscribed`: Issues you're subscribed to updates for  
\* `all`: All issues the authenticated user can see, regardless of participation or creation
 * @apiParam {string=open,closed,all} [state="open"]  Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
 * @apiParam {string} [labels]  A list of comma separated label names. Example: `bug,ui,@high`
 * @apiParam {string=created,updated,comments} [sort="created"]  What to sort results by. Can be either `created`, `updated`, `comments`.
 * @apiParam {string=asc,desc} [direction="desc"]  The direction of the sort. Can be either `asc` or `desc`.
 * @apiParam {string} [since]  Only issues updated at or after this time are returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.list({filter, state, labels, sort, direction, since, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.list({filter, state, labels, sort, direction, since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/issues listForAuthenticatedUser
 * @apiName listForAuthenticatedUser
 * @apiDescription **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.

Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.



<a href="https://developer.github.com/v3/issues/#list-issues">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string=assigned,created,mentioned,subscribed,all} [filter="assigned"]  Indicates which sorts of issues to return. Can be one of:  
\* `assigned`: Issues assigned to you  
\* `created`: Issues created by you  
\* `mentioned`: Issues mentioning you  
\* `subscribed`: Issues you're subscribed to updates for  
\* `all`: All issues the authenticated user can see, regardless of participation or creation
 * @apiParam {string=open,closed,all} [state="open"]  Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
 * @apiParam {string} [labels]  A list of comma separated label names. Example: `bug,ui,@high`
 * @apiParam {string=created,updated,comments} [sort="created"]  What to sort results by. Can be either `created`, `updated`, `comments`.
 * @apiParam {string=asc,desc} [direction="desc"]  The direction of the sort. Can be either `asc` or `desc`.
 * @apiParam {string} [since]  Only issues updated at or after this time are returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listForAuthenticatedUser({filter, state, labels, sort, direction, since, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.listForAuthenticatedUser({filter, state, labels, sort, direction, since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/issues listForOrg
 * @apiName listForOrg
 * @apiDescription **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.

Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.



<a href="https://developer.github.com/v3/issues/#list-issues">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} org  
 * @apiParam {string=assigned,created,mentioned,subscribed,all} [filter="assigned"]  Indicates which sorts of issues to return. Can be one of:  
\* `assigned`: Issues assigned to you  
\* `created`: Issues created by you  
\* `mentioned`: Issues mentioning you  
\* `subscribed`: Issues you're subscribed to updates for  
\* `all`: All issues the authenticated user can see, regardless of participation or creation
 * @apiParam {string=open,closed,all} [state="open"]  Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
 * @apiParam {string} [labels]  A list of comma separated label names. Example: `bug,ui,@high`
 * @apiParam {string=created,updated,comments} [sort="created"]  What to sort results by. Can be either `created`, `updated`, `comments`.
 * @apiParam {string=asc,desc} [direction="desc"]  The direction of the sort. Can be either `asc` or `desc`.
 * @apiParam {string} [since]  Only issues updated at or after this time are returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listForOrg({org, filter, state, labels, sort, direction, since, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.listForOrg({org, filter, state, labels, sort, direction, since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues listForRepo
 * @apiName listForRepo
 * @apiDescription **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.

Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.



<a href="https://developer.github.com/v3/issues/#list-issues-for-a-repository">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [milestone]  If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.
 * @apiParam {string=open,closed,all} [state="open"]  Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
 * @apiParam {string} [assignee]  Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
 * @apiParam {string} [creator]  The user that created the issue.
 * @apiParam {string} [mentioned]  A user that's mentioned in the issue.
 * @apiParam {string} [labels]  A list of comma separated label names. Example: `bug,ui,@high`
 * @apiParam {string=created,updated,comments} [sort="created"]  What to sort results by. Can be either `created`, `updated`, `comments`.
 * @apiParam {string=asc,desc} [direction="desc"]  The direction of the sort. Can be either `asc` or `desc`.
 * @apiParam {string} [since]  Only issues updated at or after this time are returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listForRepo({owner, repo, milestone, state, assignee, creator, mentioned, labels, sort, direction, since, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.listForRepo({owner, repo, milestone, state, assignee, creator, mentioned, labels, sort, direction, since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/:number get
 * @apiName get
 * @apiDescription The API returns a [`301 Moved Permanently` status](https://developer.github.com/v3/#http-redirects) if the issue was [transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe to the [`issues`](https://developer.github.com/v3/activity/events/types/#issuesevent) webhook.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.

Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.



<a href="https://developer.github.com/v3/issues/#get-a-single-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.get({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.get({owner, repo, number}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/issues create
 * @apiName create
 * @apiDescription Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

<a href="https://developer.github.com/v3/issues/#create-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} title  The title of the issue.
 * @apiParam {string} [body]  The contents of the issue.
 * @apiParam {string} [assignee]  Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is deprecated.**_
 * @apiParam {integer} [milestone]  The `number` of the milestone to associate this issue with. _NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise._
 * @apiParam {string[]} [labels]  Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._
 * @apiParam {string[]} [assignees]  Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
 * @apiExample {js} async/await
 * const result = await octokit.issues.create({owner, repo, title, body, assignee, milestone, labels, assignees})
 * @apiExample {js} Promise
 * octokit.issues.create({owner, repo, title, body, assignee, milestone, labels, assignees}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/issues/:number update
 * @apiName update
 * @apiDescription Issue owners and users with push access can edit an issue.

<a href="https://developer.github.com/v3/issues/#edit-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string} [title]  The title of the issue.
 * @apiParam {string} [body]  The contents of the issue.
 * @apiParam {string} [assignee]  Login for the user that this issue should be assigned to. **This field is deprecated.**
 * @apiParam {string=open,closed} [state]  State of the issue. Either `open` or `closed`.
 * @apiParam {integer} [milestone]  The `number` of the milestone to associate this issue with or `null` to remove current. _NOTE: Only users with push access can set the milestone for issues. The milestone is silently dropped otherwise._
 * @apiParam {string[]} [labels]  Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._
 * @apiParam {string[]} [assignees]  Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
 * @apiExample {js} async/await
 * const result = await octokit.issues.update({owner, repo, number, title, body, assignee, state, milestone, labels, assignees})
 * @apiExample {js} Promise
 * octokit.issues.update({owner, repo, number, title, body, assignee, state, milestone, labels, assignees}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/issues/:number/lock lock
 * @apiName lock
 * @apiDescription Users with push access can lock an issue or pull request's conversation.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

<a href="https://developer.github.com/v3/issues/#lock-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string=off-topic,too heated,resolved,spam} [lock_reason]  The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:  
\* `off-topic`  
\* `too heated`  
\* `resolved`  
\* `spam`
 * @apiExample {js} async/await
 * const result = await octokit.issues.lock({owner, repo, number, lock_reason})
 * @apiExample {js} Promise
 * octokit.issues.lock({owner, repo, number, lock_reason}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/issues/:number/lock unlock
 * @apiName unlock
 * @apiDescription Users with push access can unlock an issue's conversation.

<a href="https://developer.github.com/v3/issues/#unlock-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.unlock({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.unlock({owner, repo, number}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/assignees listAssignees
 * @apiName listAssignees
 * @apiDescription Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.

<a href="https://developer.github.com/v3/issues/assignees/#list-assignees">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listAssignees({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.listAssignees({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/assignees/:assignee checkAssignee
 * @apiName checkAssignee
 * @apiDescription Checks if a user has permission to be assigned to an issue in this repository.

If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.

Otherwise a `404` status code is returned.

<a href="https://developer.github.com/v3/issues/assignees/#check-assignee">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} assignee  
 * @apiExample {js} async/await
 * const result = await octokit.issues.checkAssignee({owner, repo, assignee})
 * @apiExample {js} Promise
 * octokit.issues.checkAssignee({owner, repo, assignee}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/issues/:number/assignees addAssignees
 * @apiName addAssignees
 * @apiDescription Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.

This example adds two assignees to the existing `octocat` assignee.

<a href="https://developer.github.com/v3/issues/assignees/#add-assignees-to-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string[]} [assignees]  Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._
 * @apiExample {js} async/await
 * const result = await octokit.issues.addAssignees({owner, repo, number, assignees})
 * @apiExample {js} Promise
 * octokit.issues.addAssignees({owner, repo, number, assignees}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/issues/:number/assignees removeAssignees
 * @apiName removeAssignees
 * @apiDescription Removes one or more assignees from an issue.

This example removes two of three assignees, leaving the `octocat` assignee.

<a href="https://developer.github.com/v3/issues/assignees/#remove-assignees-from-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string[]} [assignees]  Usernames of assignees to remove from an issue. _NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise._
 * @apiExample {js} async/await
 * const result = await octokit.issues.removeAssignees({owner, repo, number, assignees})
 * @apiExample {js} Promise
 * octokit.issues.removeAssignees({owner, repo, number, assignees}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/:number/comments listComments
 * @apiName listComments
 * @apiDescription Issue Comments are ordered by ascending ID.



<a href="https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string} [since]  Only comments updated at or after this time are returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listComments({owner, repo, number, since, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.listComments({owner, repo, number, since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/comments listCommentsForRepo
 * @apiName listCommentsForRepo
 * @apiDescription By default, Issue Comments are ordered by ascending ID.



<a href="https://developer.github.com/v3/issues/comments/#list-comments-in-a-repository">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=created,updated} [sort="created"]  Either `created` or `updated`.
 * @apiParam {string=asc,desc} [direction]  Either `asc` or `desc`. Ignored without the `sort` parameter.
 * @apiParam {string} [since]  Only comments updated at or after this time are returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listCommentsForRepo({owner, repo, sort, direction, since})
 * @apiExample {js} Promise
 * octokit.issues.listCommentsForRepo({owner, repo, sort, direction, since}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/comments/:comment_id getComment
 * @apiName getComment
 * @apiDescription <a href="https://developer.github.com/v3/issues/comments/#get-a-single-comment">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.getComment({owner, repo, comment_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.getComment({owner, repo, comment_id, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/issues/:number/comments createComment
 * @apiName createComment
 * @apiDescription This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

<a href="https://developer.github.com/v3/issues/comments/#create-a-comment">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string} body  The contents of the comment.
 * @apiExample {js} async/await
 * const result = await octokit.issues.createComment({owner, repo, number, body})
 * @apiExample {js} Promise
 * octokit.issues.createComment({owner, repo, number, body}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/issues/comments/:comment_id updateComment
 * @apiName updateComment
 * @apiDescription <a href="https://developer.github.com/v3/issues/comments/#edit-a-comment">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiParam {string} body  The contents of the comment.
 * @apiExample {js} async/await
 * const result = await octokit.issues.updateComment({owner, repo, comment_id, body})
 * @apiExample {js} Promise
 * octokit.issues.updateComment({owner, repo, comment_id, body}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/issues/comments/:comment_id deleteComment
 * @apiName deleteComment
 * @apiDescription <a href="https://developer.github.com/v3/issues/comments/#delete-a-comment">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiExample {js} async/await
 * const result = await octokit.issues.deleteComment({owner, repo, comment_id})
 * @apiExample {js} Promise
 * octokit.issues.deleteComment({owner, repo, comment_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/:number/events listEvents
 * @apiName listEvents
 * @apiDescription <a href="https://developer.github.com/v3/issues/events/#list-events-for-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listEvents({owner, repo, number, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.listEvents({owner, repo, number, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/events listEventsForRepo
 * @apiName listEventsForRepo
 * @apiDescription <a href="https://developer.github.com/v3/issues/events/#list-events-for-a-repository">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listEventsForRepo({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.listEventsForRepo({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/events/:event_id getEvent
 * @apiName getEvent
 * @apiDescription <a href="https://developer.github.com/v3/issues/events/#get-a-single-event">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} event_id  
 * @apiExample {js} async/await
 * const result = await octokit.issues.getEvent({owner, repo, event_id})
 * @apiExample {js} Promise
 * octokit.issues.getEvent({owner, repo, event_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/labels listLabelsForRepo
 * @apiName listLabelsForRepo
 * @apiDescription <a href="https://developer.github.com/v3/issues/labels/#list-all-labels-for-this-repository">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listLabelsForRepo({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.listLabelsForRepo({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/labels/:name getLabel
 * @apiName getLabel
 * @apiDescription <a href="https://developer.github.com/v3/issues/labels/#get-a-single-label">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} name  
 * @apiExample {js} async/await
 * const result = await octokit.issues.getLabel({owner, repo, name})
 * @apiExample {js} Promise
 * octokit.issues.getLabel({owner, repo, name}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/labels createLabel
 * @apiName createLabel
 * @apiDescription <a href="https://developer.github.com/v3/issues/labels/#create-a-label">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} name  The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).
 * @apiParam {string} color  The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
 * @apiParam {string} [description]  A short description of the label.
 * @apiExample {js} async/await
 * const result = await octokit.issues.createLabel({owner, repo, name, color, description})
 * @apiExample {js} Promise
 * octokit.issues.createLabel({owner, repo, name, color, description}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/labels/:current_name updateLabel
 * @apiName updateLabel
 * @apiDescription <a href="https://developer.github.com/v3/issues/labels/#update-a-label">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} current_name  
 * @apiParam {string} [name]  The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).
 * @apiParam {string} [color]  The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
 * @apiParam {string} [description]  A short description of the label.
 * @apiExample {js} async/await
 * const result = await octokit.issues.updateLabel({owner, repo, current_name, name, color, description})
 * @apiExample {js} Promise
 * octokit.issues.updateLabel({owner, repo, current_name, name, color, description}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/labels/:name deleteLabel
 * @apiName deleteLabel
 * @apiDescription <a href="https://developer.github.com/v3/issues/labels/#delete-a-label">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} name  
 * @apiExample {js} async/await
 * const result = await octokit.issues.deleteLabel({owner, repo, name})
 * @apiExample {js} Promise
 * octokit.issues.deleteLabel({owner, repo, name}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/:number/labels listLabelsOnIssue
 * @apiName listLabelsOnIssue
 * @apiDescription <a href="https://developer.github.com/v3/issues/labels/#list-labels-on-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listLabelsOnIssue({owner, repo, number, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.listLabelsOnIssue({owner, repo, number, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/issues/:number/labels addLabels
 * @apiName addLabels
 * @apiDescription <a href="https://developer.github.com/v3/issues/labels/#add-labels-to-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string[]} labels  The name of the label to add to the issue. Must contain at least one label. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.
 * @apiExample {js} async/await
 * const result = await octokit.issues.addLabels({owner, repo, number, labels})
 * @apiExample {js} Promise
 * octokit.issues.addLabels({owner, repo, number, labels}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/issues/:number/labels/:name removeLabel
 * @apiName removeLabel
 * @apiDescription Removes the specified label from the issue, and returns the remaining labels on the issue.

<a href="https://developer.github.com/v3/issues/labels/#remove-a-label-from-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string} name  
 * @apiExample {js} async/await
 * const result = await octokit.issues.removeLabel({owner, repo, number, name})
 * @apiExample {js} Promise
 * octokit.issues.removeLabel({owner, repo, number, name}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/issues/:number/labels replaceLabels
 * @apiName replaceLabels
 * @apiDescription <a href="https://developer.github.com/v3/issues/labels/#replace-all-labels-for-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string[]} [labels]  The names of the labels to add to the issue. You can pass an empty array to remove all labels. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.
 * @apiExample {js} async/await
 * const result = await octokit.issues.replaceLabels({owner, repo, number, labels})
 * @apiExample {js} Promise
 * octokit.issues.replaceLabels({owner, repo, number, labels}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/issues/:number/labels removeLabels
 * @apiName removeLabels
 * @apiDescription <a href="https://developer.github.com/v3/issues/labels/#remove-all-labels-from-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.removeLabels({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.removeLabels({owner, repo, number}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/milestones/:number/labels listLabelsForMilestone
 * @apiName listLabelsForMilestone
 * @apiDescription <a href="https://developer.github.com/v3/issues/labels/#get-labels-for-every-issue-in-a-milestone">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listLabelsForMilestone({owner, repo, number, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.listLabelsForMilestone({owner, repo, number, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/milestones listMilestonesForRepo
 * @apiName listMilestonesForRepo
 * @apiDescription <a href="https://developer.github.com/v3/issues/milestones/#list-milestones-for-a-repository">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=open,closed,all} [state="open"]  The state of the milestone. Either `open`, `closed`, or `all`.
 * @apiParam {string=due_on,completeness} [sort="due_on"]  What to sort results by. Either `due_on` or `completeness`.
 * @apiParam {string=asc,desc} [direction="asc"]  The direction of the sort. Either `asc` or `desc`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listMilestonesForRepo({owner, repo, state, sort, direction, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.listMilestonesForRepo({owner, repo, state, sort, direction, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/milestones/:number getMilestone
 * @apiName getMilestone
 * @apiDescription <a href="https://developer.github.com/v3/issues/milestones/#get-a-single-milestone">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.getMilestone({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.getMilestone({owner, repo, number}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/milestones createMilestone
 * @apiName createMilestone
 * @apiDescription <a href="https://developer.github.com/v3/issues/milestones/#create-a-milestone">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} title  The title of the milestone.
 * @apiParam {string=open,closed} [state="open"]  The state of the milestone. Either `open` or `closed`.
 * @apiParam {string} [description]  A description of the milestone.
 * @apiParam {string} [due_on]  The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiExample {js} async/await
 * const result = await octokit.issues.createMilestone({owner, repo, title, state, description, due_on})
 * @apiExample {js} Promise
 * octokit.issues.createMilestone({owner, repo, title, state, description, due_on}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/milestones/:number updateMilestone
 * @apiName updateMilestone
 * @apiDescription <a href="https://developer.github.com/v3/issues/milestones/#update-a-milestone">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string} [title]  The title of the milestone.
 * @apiParam {string=open,closed} [state="open"]  The state of the milestone. Either `open` or `closed`.
 * @apiParam {string} [description]  A description of the milestone.
 * @apiParam {string} [due_on]  The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiExample {js} async/await
 * const result = await octokit.issues.updateMilestone({owner, repo, number, title, state, description, due_on})
 * @apiExample {js} Promise
 * octokit.issues.updateMilestone({owner, repo, number, title, state, description, due_on}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/milestones/:number deleteMilestone
 * @apiName deleteMilestone
 * @apiDescription <a href="https://developer.github.com/v3/issues/milestones/#delete-a-milestone">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiExample {js} async/await
 * const result = await octokit.issues.deleteMilestone({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.issues.deleteMilestone({owner, repo, number}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/:number/timeline listEventsForTimeline
 * @apiName listEventsForTimeline
 * @apiDescription <a href="https://developer.github.com/v3/issues/timeline/#list-events-for-an-issue">REST API doc</a>
 * @apiGroup Issues
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.issues.listEventsForTimeline({owner, repo, number, per_page, page})
 * @apiExample {js} Promise
 * octokit.issues.listEventsForTimeline({owner, repo, number, per_page, page}).then(result => {})
 */



/**,
 * Licenses
 * @namespace Licenses
 */


/**
 * @api {GET} /licenses listCommonlyUsed
 * @apiName listCommonlyUsed
 * @apiDescription <a href="https://developer.github.com/v3/licenses/#list-commonly-used-licenses">REST API doc</a>
 * @apiGroup Licenses
 *
 * @apiExample {js} async/await
 * const result = await octokit.licenses.listCommonlyUsed({})
 * @apiExample {js} Promise
 * octokit.licenses.listCommonlyUsed({}).then(result => {})
 */


/**
 * @api {GET} /licenses list
 * @apiName list
 * @apiDescription <a href="https://developer.github.com/v3/licenses/#list-commonly-used-licenses">REST API doc</a>
 * @apiGroup Licenses
 *
 * @apiDeprecated octokit.licenses.list() has been renamed to octokit.licenses.listCommonlyUsed() (2019-03-05)
 * @apiExample {js} async/await
 * const result = await octokit.licenses.list({})
 * @apiExample {js} Promise
 * octokit.licenses.list({}).then(result => {})
 */


/**
 * @api {GET} /licenses/:license get
 * @apiName get
 * @apiDescription <a href="https://developer.github.com/v3/licenses/#get-an-individual-license">REST API doc</a>
 * @apiGroup Licenses
 *
 * @apiParam {string} license  
 * @apiExample {js} async/await
 * const result = await octokit.licenses.get({license})
 * @apiExample {js} Promise
 * octokit.licenses.get({license}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/license getForRepo
 * @apiName getForRepo
 * @apiDescription This method returns the contents of the repository's license file, if one is detected.

Similar to [the repository contents API](https://developer.github.com/v3/repos/contents/#get-contents), this method also supports [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw license content or rendered license HTML.

<a href="https://developer.github.com/v3/licenses/#get-the-contents-of-a-repositorys-license">REST API doc</a>
 * @apiGroup Licenses
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.licenses.getForRepo({owner, repo})
 * @apiExample {js} Promise
 * octokit.licenses.getForRepo({owner, repo}).then(result => {})
 */



/**,
 * Markdown
 * @namespace Markdown
 */


/**
 * @api {POST} /markdown render
 * @apiName render
 * @apiDescription <a href="https://developer.github.com/v3/markdown/#render-an-arbitrary-markdown-document">REST API doc</a>
 * @apiGroup Markdown
 *
 * @apiParam {string} text  The Markdown text to render in HTML. Markdown content must be 400 KB or less.
 * @apiParam {string=markdown,gfm} [mode="markdown"]  The rendering mode. Can be either:  
\* `markdown` to render a document in plain Markdown, just like README.md files are rendered.  
\* `gfm` to render a document in [GitHub Flavored Markdown](https://github.github.com/gfm/), which creates links for user mentions as well as references to SHA-1 hashes, issues, and pull requests.
 * @apiParam {string} [context]  The repository context to use when creating references in `gfm` mode. Omit this parameter when using `markdown` mode.
 * @apiExample {js} async/await
 * const result = await octokit.markdown.render({text, mode, context})
 * @apiExample {js} Promise
 * octokit.markdown.render({text, mode, context}).then(result => {})
 */


/**
 * @api {POST} /markdown/raw renderRaw
 * @apiName renderRaw
 * @apiDescription You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.



<a href="https://developer.github.com/v3/markdown/#render-a-markdown-document-in-raw-mode">REST API doc</a>
 * @apiGroup Markdown
 *
 * @apiParam {string} data  
 * @apiExample {js} async/await
 * const result = await octokit.markdown.renderRaw({data})
 * @apiExample {js} Promise
 * octokit.markdown.renderRaw({data}).then(result => {})
 */



/**,
 * Meta
 * @namespace Meta
 */


/**
 * @api {GET} /meta get
 * @apiName get
 * @apiDescription This endpoint provides a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://help.github.com/articles/about-github-s-ip-addresses/)."

<a href="https://developer.github.com/v3/meta/#meta">REST API doc</a>
 * @apiGroup Meta
 *
 * @apiExample {js} async/await
 * const result = await octokit.meta.get({})
 * @apiExample {js} Promise
 * octokit.meta.get({}).then(result => {})
 */



/**,
 * Migrations
 * @namespace Migrations
 */


/**
 * @api {POST} /orgs/:org/migrations startForOrg
 * @apiName startForOrg
 * @apiDescription Initiates the generation of a migration archive.

<a href="https://developer.github.com/v3/migrations/orgs/#start-an-organization-migration">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} org  
 * @apiParam {string[]} repositories  A list of arrays indicating which repositories should be migrated.
 * @apiParam {boolean} [lock_repositories="false"]  Indicates whether repositories should be locked (to prevent manipulation) while migrating data.
 * @apiParam {boolean} [exclude_attachments="false"]  Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).
 * @apiExample {js} async/await
 * const result = await octokit.migrations.startForOrg({org, repositories, lock_repositories, exclude_attachments})
 * @apiExample {js} Promise
 * octokit.migrations.startForOrg({org, repositories, lock_repositories, exclude_attachments}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/migrations listForOrg
 * @apiName listForOrg
 * @apiDescription Lists the most recent migrations.

<a href="https://developer.github.com/v3/migrations/orgs/#get-a-list-of-organization-migrations">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} org  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.listForOrg({org, per_page, page})
 * @apiExample {js} Promise
 * octokit.migrations.listForOrg({org, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/migrations/:migration_id getStatusForOrg
 * @apiName getStatusForOrg
 * @apiDescription Fetches the status of a migration.

The `state` of a migration can be one of the following values:

*   `pending`, which means the migration hasn't started yet.
*   `exporting`, which means the migration is in progress.
*   `exported`, which means the migration finished successfully.
*   `failed`, which means the migration failed.

<a href="https://developer.github.com/v3/migrations/orgs/#get-the-status-of-an-organization-migration">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} org  
 * @apiParam {integer} migration_id  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getStatusForOrg({org, migration_id})
 * @apiExample {js} Promise
 * octokit.migrations.getStatusForOrg({org, migration_id}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/migrations/:migration_id/archive getArchiveForOrg
 * @apiName getArchiveForOrg
 * @apiDescription Fetches the URL to a migration archive.



<a href="https://developer.github.com/v3/migrations/orgs/#download-an-organization-migration-archive">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} org  
 * @apiParam {integer} migration_id  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getArchiveForOrg({org, migration_id})
 * @apiExample {js} Promise
 * octokit.migrations.getArchiveForOrg({org, migration_id}).then(result => {})
 */


/**
 * @api {DELETE} /orgs/:org/migrations/:migration_id/archive deleteArchiveForOrg
 * @apiName deleteArchiveForOrg
 * @apiDescription Deletes a previous migration archive. Migration archives are automatically deleted after seven days.

<a href="https://developer.github.com/v3/migrations/orgs/#delete-an-organization-migration-archive">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} org  
 * @apiParam {integer} migration_id  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.deleteArchiveForOrg({org, migration_id})
 * @apiExample {js} Promise
 * octokit.migrations.deleteArchiveForOrg({org, migration_id}).then(result => {})
 */


/**
 * @api {DELETE} /orgs/:org/migrations/:migration_id/repos/:repo_name/lock unlockRepoForOrg
 * @apiName unlockRepoForOrg
 * @apiDescription Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://developer.github.com/v3/repos/#delete-a-repository) when the migration is complete and you no longer need the source data.

<a href="https://developer.github.com/v3/migrations/orgs/#unlock-an-organization-repository">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} org  
 * @apiParam {integer} migration_id  
 * @apiParam {string} repo_name  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.unlockRepoForOrg({org, migration_id, repo_name})
 * @apiExample {js} Promise
 * octokit.migrations.unlockRepoForOrg({org, migration_id, repo_name}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/import startImport
 * @apiName startImport
 * @apiDescription Start a source import to a GitHub repository using GitHub Importer.

<a href="https://developer.github.com/v3/migrations/source_imports/#start-an-import">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} vcs_url  The URL of the originating repository.
 * @apiParam {string=subversion,git,mercurial,tfvc} [vcs]  The originating VCS type. Can be one of `subversion`, `git`, `mercurial`, or `tfvc`. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
 * @apiParam {string} [vcs_username]  If authentication is required, the username to provide to `vcs_url`.
 * @apiParam {string} [vcs_password]  If authentication is required, the password to provide to `vcs_url`.
 * @apiParam {string} [tfvc_project]  For a tfvc import, the name of the project that is being imported.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.startImport({owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project})
 * @apiExample {js} Promise
 * octokit.migrations.startImport({owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/import getImportProgress
 * @apiName getImportProgress
 * @apiDescription View the progress of an import.

**Import status**

This section includes details about the possible values of the `status` field of the Import Progress response.

An import that does not have errors will progress through these steps:

*   `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.
*   `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).
*   `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.
*   `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".
*   `complete` - the import is complete, and the repository is ready on GitHub.

If there are problems, you will see one of these in the `status` field:

*   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update Existing Import](#update-existing-import) section.
*   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://github.com/contact) for more information.
*   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update Existing Import](#update-existing-import) section.
*   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](#cancel-an-import) and [retry](#start-an-import) with the correct URL.
*   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update Existing Import](#update-existing-import) section.

**The project_choices field**

When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.

**Git LFS related fields**

This section includes details about Git LFS related fields that may be present in the Import Progress response.

*   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.
*   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.
*   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.
*   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.

<a href="https://developer.github.com/v3/migrations/source_imports/#get-import-progress">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getImportProgress({owner, repo})
 * @apiExample {js} Promise
 * octokit.migrations.getImportProgress({owner, repo}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/import updateImport
 * @apiName updateImport
 * @apiDescription An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API request. If no parameters are provided, the import will be restarted.

Some servers (e.g. TFS servers) can have several projects at a single URL. In those cases the import progress will have the status `detection_found_multiple` and the Import Progress response will include a `project_choices` array. You can select the project to import by providing one of the objects in the `project_choices` array in the update request.

The following example demonstrates the workflow for updating an import with "project1" as the project choice. Given a `project_choices` array like such:

To restart an import, no parameters are provided in the update request.

<a href="https://developer.github.com/v3/migrations/source_imports/#update-existing-import">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [vcs_username]  The username to provide to the originating repository.
 * @apiParam {string} [vcs_password]  The password to provide to the originating repository.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.updateImport({owner, repo, vcs_username, vcs_password})
 * @apiExample {js} Promise
 * octokit.migrations.updateImport({owner, repo, vcs_username, vcs_password}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/import/authors getCommitAuthors
 * @apiName getCommitAuthors
 * @apiDescription Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.

This API method and the "Map a commit author" method allow you to provide correct Git author information.

<a href="https://developer.github.com/v3/migrations/source_imports/#get-commit-authors">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [since]  Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the `raw` step.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getCommitAuthors({owner, repo, since})
 * @apiExample {js} Promise
 * octokit.migrations.getCommitAuthors({owner, repo, since}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/import/authors/:author_id mapCommitAuthor
 * @apiName mapCommitAuthor
 * @apiDescription Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.

<a href="https://developer.github.com/v3/migrations/source_imports/#map-a-commit-author">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} author_id  
 * @apiParam {string} [email]  The new Git author email.
 * @apiParam {string} [name]  The new Git author name.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.mapCommitAuthor({owner, repo, author_id, email, name})
 * @apiExample {js} Promise
 * octokit.migrations.mapCommitAuthor({owner, repo, author_id, email, name}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/import/lfs setLfsPreference
 * @apiName setLfsPreference
 * @apiDescription You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).

<a href="https://developer.github.com/v3/migrations/source_imports/#set-git-lfs-preference">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=opt_in,opt_out} use_lfs  Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import).
 * @apiExample {js} async/await
 * const result = await octokit.migrations.setLfsPreference({owner, repo, use_lfs})
 * @apiExample {js} Promise
 * octokit.migrations.setLfsPreference({owner, repo, use_lfs}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/import/large_files getLargeFiles
 * @apiName getLargeFiles
 * @apiDescription List files larger than 100MB found during the import

<a href="https://developer.github.com/v3/migrations/source_imports/#get-large-files">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getLargeFiles({owner, repo})
 * @apiExample {js} Promise
 * octokit.migrations.getLargeFiles({owner, repo}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/import cancelImport
 * @apiName cancelImport
 * @apiDescription Stop an import for a repository.

<a href="https://developer.github.com/v3/migrations/source_imports/#cancel-an-import">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.cancelImport({owner, repo})
 * @apiExample {js} Promise
 * octokit.migrations.cancelImport({owner, repo}).then(result => {})
 */


/**
 * @api {POST} /user/migrations startForAuthenticatedUser
 * @apiName startForAuthenticatedUser
 * @apiDescription Initiates the generation of a user migration archive.

<a href="https://developer.github.com/v3/migrations/users/#start-a-user-migration">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {string[]} repositories  An array of repositories to include in the migration.
 * @apiParam {boolean} [lock_repositories="false"]  Locks the `repositories` to prevent changes during the migration when set to `true`.
 * @apiParam {boolean} [exclude_attachments="false"]  Does not include attachments uploaded to GitHub.com in the migration data when set to `true`. Excluding attachments will reduce the migration archive file size.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.startForAuthenticatedUser({repositories, lock_repositories, exclude_attachments})
 * @apiExample {js} Promise
 * octokit.migrations.startForAuthenticatedUser({repositories, lock_repositories, exclude_attachments}).then(result => {})
 */


/**
 * @api {GET} /user/migrations listForAuthenticatedUser
 * @apiName listForAuthenticatedUser
 * @apiDescription Lists all migrations a user has started.

<a href="https://developer.github.com/v3/migrations/users/#get-a-list-of-user-migrations">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.migrations.listForAuthenticatedUser({per_page, page})
 * @apiExample {js} Promise
 * octokit.migrations.listForAuthenticatedUser({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/migrations/:migration_id getStatusForAuthenticatedUser
 * @apiName getStatusForAuthenticatedUser
 * @apiDescription Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:

*   `pending` - the migration hasn't started yet.
*   `exporting` - the migration is in progress.
*   `exported` - the migration finished successfully.
*   `failed` - the migration failed.

Once the migration has been `exported` you can [download the migration archive](#download-a-user-migration-archive).

<a href="https://developer.github.com/v3/migrations/users/#get-the-status-of-a-user-migration">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {integer} migration_id  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getStatusForAuthenticatedUser({migration_id})
 * @apiExample {js} Promise
 * octokit.migrations.getStatusForAuthenticatedUser({migration_id}).then(result => {})
 */


/**
 * @api {GET} /user/migrations/:migration_id/archive getArchiveForAuthenticatedUser
 * @apiName getArchiveForAuthenticatedUser
 * @apiDescription Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:

*   attachments
*   bases
*   commit\_comments
*   issue\_comments
*   issue\_events
*   issues
*   milestones
*   organizations
*   projects
*   protected\_branches
*   pull\_request\_reviews
*   pull\_requests
*   releases
*   repositories
*   review\_comments
*   schema
*   users

The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.



<a href="https://developer.github.com/v3/migrations/users/#download-a-user-migration-archive">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {integer} migration_id  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.getArchiveForAuthenticatedUser({migration_id})
 * @apiExample {js} Promise
 * octokit.migrations.getArchiveForAuthenticatedUser({migration_id}).then(result => {})
 */


/**
 * @api {DELETE} /user/migrations/:migration_id/archive deleteArchiveForAuthenticatedUser
 * @apiName deleteArchiveForAuthenticatedUser
 * @apiDescription Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [Get a list of user migrations](#get-a-list-of-user-migrations) and [Get the status of a user migration](#get-the-status-of-a-user-migration) endpoints, will continue to be available even after an archive is deleted.

<a href="https://developer.github.com/v3/migrations/users/#delete-a-user-migration-archive">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {integer} migration_id  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.deleteArchiveForAuthenticatedUser({migration_id})
 * @apiExample {js} Promise
 * octokit.migrations.deleteArchiveForAuthenticatedUser({migration_id}).then(result => {})
 */


/**
 * @api {DELETE} /user/migrations/:migration_id/repos/:repo_name/lock unlockRepoForAuthenticatedUser
 * @apiName unlockRepoForAuthenticatedUser
 * @apiDescription Unlocks a repository. You can lock repositories when you [start a user migration](#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://developer.github.com/v3/repos/#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.

<a href="https://developer.github.com/v3/migrations/users/#unlock-a-user-repository">REST API doc</a>
 * @apiGroup Migrations
 *
 * @apiParam {integer} migration_id  
 * @apiParam {string} repo_name  
 * @apiExample {js} async/await
 * const result = await octokit.migrations.unlockRepoForAuthenticatedUser({migration_id, repo_name})
 * @apiExample {js} Promise
 * octokit.migrations.unlockRepoForAuthenticatedUser({migration_id, repo_name}).then(result => {})
 */



/**,
 * OauthAuthorizations
 * @namespace OauthAuthorizations
 */


/**
 * @api {GET} /applications/grants listGrants
 * @apiName listGrants
 * @apiDescription You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `["repo", "user"]`.

<a href="https://developer.github.com/v3/oauth_authorizations/#list-your-grants">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.listGrants({per_page, page})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.listGrants({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /applications/grants/:grant_id getGrant
 * @apiName getGrant
 * @apiDescription <a href="https://developer.github.com/v3/oauth_authorizations/#get-a-single-grant">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {integer} grant_id  
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.getGrant({grant_id})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.getGrant({grant_id}).then(result => {})
 */


/**
 * @api {DELETE} /applications/grants/:grant_id deleteGrant
 * @apiName deleteGrant
 * @apiDescription Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

<a href="https://developer.github.com/v3/oauth_authorizations/#delete-a-grant">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {integer} grant_id  
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.deleteGrant({grant_id})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.deleteGrant({grant_id}).then(result => {})
 */


/**
 * @api {GET} /authorizations listAuthorizations
 * @apiName listAuthorizations
 * @apiDescription <a href="https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.listAuthorizations({per_page, page})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.listAuthorizations({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /authorizations/:authorization_id getAuthorization
 * @apiName getAuthorization
 * @apiDescription <a href="https://developer.github.com/v3/oauth_authorizations/#get-a-single-authorization">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {integer} authorization_id  
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.getAuthorization({authorization_id})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.getAuthorization({authorization_id}).then(result => {})
 */


/**
 * @api {POST} /authorizations createAuthorization
 * @apiName createAuthorization
 * @apiDescription If you need a small number of personal access tokens, implementing the [web flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/) can be cumbersome. Instead, tokens can be created using the OAuth Authorizations API using [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication). To create personal access tokens for a particular OAuth application, you must provide its client ID and secret, found on the OAuth application settings page, linked from your [OAuth applications listing on GitHub](https://github.com/settings/developers).

If your OAuth application intends to create multiple tokens for one user, use `fingerprint` to differentiate between them.

You can also create OAuth tokens through the web UI via the [personal access tokens settings](https://github.com/settings/tokens). Read more about these tokens on the [GitHub Help site](https://help.github.com/articles/creating-an-access-token-for-command-line-use).

Organizations that enforce SAML SSO require personal access tokens to be whitelisted. Read more about whitelisting tokens on the [GitHub Help site](https://help.github.com/articles/about-identity-and-access-management-with-saml-single-sign-on).

<a href="https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {string[]} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {string} note  A note to remind you what the OAuth token is for. Tokens not associated with a specific OAuth application (i.e. personal access tokens) must have a unique note.
 * @apiParam {string} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiParam {string} [client_id]  The 20 character OAuth app client key for which to create the token.
 * @apiParam {string} [client_secret]  The 40 character OAuth app client secret for which to create the token.
 * @apiParam {string} [fingerprint]  A unique string to distinguish an authorization from others created for the same client ID and user.
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.createAuthorization({scopes, note, note_url, client_id, client_secret, fingerprint})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.createAuthorization({scopes, note, note_url, client_id, client_secret, fingerprint}).then(result => {})
 */


/**
 * @api {PUT} /authorizations/clients/:client_id getOrCreateAuthorizationForApp
 * @apiName getOrCreateAuthorizationForApp
 * @apiDescription This method will create a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.

<a href="https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {string} client_id  
 * @apiParam {string} client_secret  The 40 character OAuth app client secret associated with the client ID specified in the URL.
 * @apiParam {string[]} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {string} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {string} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiParam {string} [fingerprint]  A unique string to distinguish an authorization from others created for the same client and user. If provided, this API is functionally equivalent to [Get-or-create an authorization for a specific app and fingerprint](https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint).
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.getOrCreateAuthorizationForApp({client_id, client_secret, scopes, note, note_url, fingerprint})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.getOrCreateAuthorizationForApp({client_id, client_secret, scopes, note, note_url, fingerprint}).then(result => {})
 */


/**
 * @api {PUT} /authorizations/clients/:client_id/:fingerprint getOrCreateAuthorizationForAppAndFingerprint
 * @apiName getOrCreateAuthorizationForAppAndFingerprint
 * @apiDescription This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.

<a href="https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {string} client_id  
 * @apiParam {string} fingerprint  
 * @apiParam {string} client_secret  The 40 character OAuth app client secret associated with the client ID specified in the URL.
 * @apiParam {string[]} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {string} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {string} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint({client_id, fingerprint, client_secret, scopes, note, note_url})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint({client_id, fingerprint, client_secret, scopes, note, note_url}).then(result => {})
 */


/**
 * @api {PUT} /authorizations/clients/:client_id/:fingerprint getOrCreateAuthorizationForAppFingerprint
 * @apiName getOrCreateAuthorizationForAppFingerprint
 * @apiDescription This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.

<a href="https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {string} client_id  
 * @apiParam {string} fingerprint  
 * @apiParam {string} client_secret  The 40 character OAuth app client secret associated with the client ID specified in the URL.
 * @apiParam {string[]} [scopes]  A list of scopes that this authorization is in.
 * @apiParam {string} [note]  A note to remind you what the OAuth token is for.
 * @apiParam {string} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiDeprecated octokit.oauthAuthorizations.getOrCreateAuthorizationForAppFingerprint() has been renamed to octokit.oauthAuthorizations.getOrCreateAuthorizationForAppAndFingerprint() (2018-12-27)
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.getOrCreateAuthorizationForAppFingerprint({client_id, fingerprint, client_secret, scopes, note, note_url})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.getOrCreateAuthorizationForAppFingerprint({client_id, fingerprint, client_secret, scopes, note, note_url}).then(result => {})
 */


/**
 * @api {PATCH} /authorizations/:authorization_id updateAuthorization
 * @apiName updateAuthorization
 * @apiDescription You can only send one of these scope keys at a time.

<a href="https://developer.github.com/v3/oauth_authorizations/#update-an-existing-authorization">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {integer} authorization_id  
 * @apiParam {string[]} [scopes]  Replaces the authorization scopes with these.
 * @apiParam {string[]} [add_scopes]  A list of scopes to add to this authorization.
 * @apiParam {string[]} [remove_scopes]  A list of scopes to remove from this authorization.
 * @apiParam {string} [note]  A note to remind you what the OAuth token is for. Tokens not associated with a specific OAuth application (i.e. personal access tokens) must have a unique note.
 * @apiParam {string} [note_url]  A URL to remind you what app the OAuth token is for.
 * @apiParam {string} [fingerprint]  A unique string to distinguish an authorization from others created for the same client ID and user.
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.updateAuthorization({authorization_id, scopes, add_scopes, remove_scopes, note, note_url, fingerprint})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.updateAuthorization({authorization_id, scopes, add_scopes, remove_scopes, note, note_url, fingerprint}).then(result => {})
 */


/**
 * @api {DELETE} /authorizations/:authorization_id deleteAuthorization
 * @apiName deleteAuthorization
 * @apiDescription <a href="https://developer.github.com/v3/oauth_authorizations/#delete-an-authorization">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {integer} authorization_id  
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.deleteAuthorization({authorization_id})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.deleteAuthorization({authorization_id}).then(result => {})
 */


/**
 * @api {GET} /applications/:client_id/tokens/:access_token checkAuthorization
 * @apiName checkAuthorization
 * @apiDescription OAuth applications can use a special API method for checking OAuth token validity without running afoul of normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing it, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

<a href="https://developer.github.com/v3/oauth_authorizations/#check-an-authorization">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {string} client_id  
 * @apiParam {string} access_token  
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.checkAuthorization({client_id, access_token})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.checkAuthorization({client_id, access_token}).then(result => {})
 */


/**
 * @api {POST} /applications/:client_id/tokens/:access_token resetAuthorization
 * @apiName resetAuthorization
 * @apiDescription OAuth applications can use this API method to reset a valid OAuth token without end user involvement. Applications must save the "token" property in the response, because changes take effect immediately. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing it, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

<a href="https://developer.github.com/v3/oauth_authorizations/#reset-an-authorization">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {string} client_id  
 * @apiParam {string} access_token  
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.resetAuthorization({client_id, access_token})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.resetAuthorization({client_id, access_token}).then(result => {})
 */


/**
 * @api {DELETE} /applications/:client_id/tokens/:access_token revokeAuthorizationForApplication
 * @apiName revokeAuthorizationForApplication
 * @apiDescription OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) for this method, where the username is the OAuth application `client_id` and the password is its `client_secret`.

<a href="https://developer.github.com/v3/oauth_authorizations/#revoke-an-authorization-for-an-application">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {string} client_id  
 * @apiParam {string} access_token  
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.revokeAuthorizationForApplication({client_id, access_token})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.revokeAuthorizationForApplication({client_id, access_token}).then(result => {})
 */


/**
 * @api {DELETE} /applications/:client_id/grants/:access_token revokeGrantForApplication
 * @apiName revokeGrantForApplication
 * @apiDescription OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) for this method, where the username is the OAuth application `client_id` and the password is its `client_secret`. You must also provide a valid token as `:token` and the grant for the token's owner will be deleted.

Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

<a href="https://developer.github.com/v3/oauth_authorizations/#revoke-a-grant-for-an-application">REST API doc</a>
 * @apiGroup OauthAuthorizations
 *
 * @apiParam {string} client_id  
 * @apiParam {string} access_token  
 * @apiExample {js} async/await
 * const result = await octokit.oauthAuthorizations.revokeGrantForApplication({client_id, access_token})
 * @apiExample {js} Promise
 * octokit.oauthAuthorizations.revokeGrantForApplication({client_id, access_token}).then(result => {})
 */



/**,
 * Orgs
 * @namespace Orgs
 */


/**
 * @api {GET} /user/orgs listForAuthenticatedUser
 * @apiName listForAuthenticatedUser
 * @apiDescription List organizations for the authenticated user.

**OAuth scope requirements**

This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.

<a href="https://developer.github.com/v3/orgs/#list-your-organizations">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.listForAuthenticatedUser({per_page, page})
 * @apiExample {js} Promise
 * octokit.orgs.listForAuthenticatedUser({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /organizations list
 * @apiName list
 * @apiDescription Lists all organizations, in the order that they were created on GitHub.

**Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of organizations.

<a href="https://developer.github.com/v3/orgs/#list-all-organizations">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} [since]  The integer ID of the last Organization that you've seen.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.list({since, per_page, page})
 * @apiExample {js} Promise
 * octokit.orgs.list({since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /users/:username/orgs listForUser
 * @apiName listForUser
 * @apiDescription List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.

This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List your organizations](#list-your-organizations) API instead.

<a href="https://developer.github.com/v3/orgs/#list-user-organizations">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} username  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.listForUser({username, per_page, page})
 * @apiExample {js} Promise
 * octokit.orgs.listForUser({username, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org get
 * @apiName get
 * @apiDescription To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).

<a href="https://developer.github.com/v3/orgs/#get-an-organization">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.get({org})
 * @apiExample {js} Promise
 * octokit.orgs.get({org}).then(result => {})
 */


/**
 * @api {PATCH} /orgs/:org update
 * @apiName update
 * @apiDescription **Note:** The new `members_allowed_repository_creation_type` replaces the functionality of `members_can_create_repositories`.

Setting `members_allowed_repository_creation_type` will override the value of `members_can_create_repositories` in the following ways:

*   Setting `members_allowed_repository_creation_type` to `all` or `private` sets `members_can_create_repositories` to `true`.
*   Setting `members_allowed_repository_creation_type` to `none` sets `members_can_create_repositories` to `false`.
*   If you omit `members_allowed_repository_creation_type`, `members_can_create_repositories` is not modified.

<a href="https://developer.github.com/v3/orgs/#edit-an-organization">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} [billing_email]  Billing email address. This address is not publicized.
 * @apiParam {string} [company]  The company name.
 * @apiParam {string} [email]  The publicly visible email address.
 * @apiParam {string} [location]  The location.
 * @apiParam {string} [name]  The shorthand name of the company.
 * @apiParam {string} [description]  The description of the company.
 * @apiParam {boolean} [has_organization_projects]  Toggles whether organization projects are enabled for the organization.
 * @apiParam {boolean} [has_repository_projects]  Toggles whether repository projects are enabled for repositories that belong to the organization.
 * @apiParam {string=read,write,admin,none} [default_repository_permission="read"]  Default permission level members have for organization repositories:  
\* `read` - can pull, but not push to or administer this repository.  
\* `write` - can pull and push, but not administer this repository.  
\* `admin` - can pull, push, and administer this repository.  
\* `none` - no permissions granted by default.
 * @apiParam {boolean} [members_can_create_repositories="true"]  Toggles the ability of non-admin organization members to create repositories. Can be one of:  
\* `true` - all organization members can create repositories.  
\* `false` - only admin members can create repositories.  
Default: `true`  
**Note:** Another parameter can override the this parameter. See [this note](#members_can_create_repositories) for details. **Note:** Another parameter can override the this parameter. See [this note](#members_can_create_repositories) for details.
 * @apiParam {string=all,private,none} [members_allowed_repository_creation_type]  Specifies which types of repositories non-admin organization members can create. Can be one of:  
\* `all` - all organization members can create public and private repositories.  
\* `private` - members can create private repositories. This option is only available to repositories that are part of an organization on [GitHub Business Cloud](https://github.com/pricing/business-cloud).  
\* `none` - only admin members can create repositories.  
**Note:** Using this parameter will override values set in `members_can_create_repositories`. See [this note](#members_can_create_repositories) for details.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.update({org, billing_email, company, email, location, name, description, has_organization_projects, has_repository_projects, default_repository_permission, members_can_create_repositories, members_allowed_repository_creation_type})
 * @apiExample {js} Promise
 * octokit.orgs.update({org, billing_email, company, email, location, name, description, has_organization_projects, has_repository_projects, default_repository_permission, members_can_create_repositories, members_allowed_repository_creation_type}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/blocks listBlockedUsers
 * @apiName listBlockedUsers
 * @apiDescription List the users blocked by an organization.

<a href="https://developer.github.com/v3/orgs/blocking/#list-blocked-users">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.listBlockedUsers({org})
 * @apiExample {js} Promise
 * octokit.orgs.listBlockedUsers({org}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/blocks/:username checkBlockedUser
 * @apiName checkBlockedUser
 * @apiDescription If the user is blocked:

If the user is not blocked:

<a href="https://developer.github.com/v3/orgs/blocking/#check-whether-a-user-is-blocked-from-an-organization">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.checkBlockedUser({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.checkBlockedUser({org, username}).then(result => {})
 */


/**
 * @api {PUT} /orgs/:org/blocks/:username blockUser
 * @apiName blockUser
 * @apiDescription <a href="https://developer.github.com/v3/orgs/blocking/#block-a-user">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.blockUser({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.blockUser({org, username}).then(result => {})
 */


/**
 * @api {DELETE} /orgs/:org/blocks/:username unblockUser
 * @apiName unblockUser
 * @apiDescription <a href="https://developer.github.com/v3/orgs/blocking/#unblock-a-user">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.unblockUser({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.unblockUser({org, username}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/hooks listHooks
 * @apiName listHooks
 * @apiDescription <a href="https://developer.github.com/v3/orgs/hooks/#list-hooks">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.listHooks({org, per_page, page})
 * @apiExample {js} Promise
 * octokit.orgs.listHooks({org, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/hooks/:hook_id getHook
 * @apiName getHook
 * @apiDescription <a href="https://developer.github.com/v3/orgs/hooks/#get-single-hook">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {integer} hook_id  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getHook({org, hook_id})
 * @apiExample {js} Promise
 * octokit.orgs.getHook({org, hook_id}).then(result => {})
 */


/**
 * @api {POST} /orgs/:org/hooks createHook
 * @apiName createHook
 * @apiDescription Here's how you can create a hook that posts payloads in JSON format:

<a href="https://developer.github.com/v3/orgs/hooks/#create-a-hook">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} name  Must be passed as "web".
 * @apiParam {object} config  Key/value pairs to provide settings for this webhook. [These are defined below](#create-hook-config-params).
 * @apiParam {string} config:url  The URL to which the payloads will be delivered.
 * @apiParam {string} [config:content_type]  The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
 * @apiParam {string} [config:secret]  If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/#delivery-headers) header.
 * @apiParam {string} [config:insecure_ssl]  Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
 * @apiParam {string[]} [events="["push"]"]  Determines what [events](https://developer.github.com/v3/activity/events/types/) the hook is triggered for.
 * @apiParam {boolean} [active="true"]  Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.createHook({org, name, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active})
 * @apiExample {js} Promise
 * octokit.orgs.createHook({org, name, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active}).then(result => {})
 */


/**
 * @api {PATCH} /orgs/:org/hooks/:hook_id updateHook
 * @apiName updateHook
 * @apiDescription <a href="https://developer.github.com/v3/orgs/hooks/#edit-a-hook">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {integer} hook_id  
 * @apiParam {object} [config]  Key/value pairs to provide settings for this webhook. [These are defined below](#update-hook-config-params).
 * @apiParam {string} config:url  The URL to which the payloads will be delivered.
 * @apiParam {string} [config:content_type]  The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
 * @apiParam {string} [config:secret]  If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/#delivery-headers) header.
 * @apiParam {string} [config:insecure_ssl]  Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
 * @apiParam {string[]} [events="["push"]"]  Determines what [events](https://developer.github.com/v3/activity/events/types/) the hook is triggered for.
 * @apiParam {boolean} [active="true"]  Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.updateHook({org, hook_id, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active})
 * @apiExample {js} Promise
 * octokit.orgs.updateHook({org, hook_id, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active}).then(result => {})
 */


/**
 * @api {POST} /orgs/:org/hooks/:hook_id/pings pingHook
 * @apiName pingHook
 * @apiDescription This will trigger a [ping event](https://developer.github.com/webhooks/#ping-event) to be sent to the hook.

<a href="https://developer.github.com/v3/orgs/hooks/#ping-a-hook">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {integer} hook_id  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.pingHook({org, hook_id})
 * @apiExample {js} Promise
 * octokit.orgs.pingHook({org, hook_id}).then(result => {})
 */


/**
 * @api {DELETE} /orgs/:org/hooks/:hook_id deleteHook
 * @apiName deleteHook
 * @apiDescription <a href="https://developer.github.com/v3/orgs/hooks/#delete-a-hook">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {integer} hook_id  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.deleteHook({org, hook_id})
 * @apiExample {js} Promise
 * octokit.orgs.deleteHook({org, hook_id}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/members listMembers
 * @apiName listMembers
 * @apiDescription List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.



<a href="https://developer.github.com/v3/orgs/members/#members-list">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string=2fa_disabled,all} [filter="all"]  Filter members returned in the list. Can be one of:  
\* `2fa_disabled` - Members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled. Available for organization owners.  
\* `all` - All members the authenticated user can see.
 * @apiParam {string=all,admin,member} [role="all"]  Filter members returned by their role. Can be one of:  
\* `all` - All members of the organization, regardless of role.  
\* `admin` - Organization owners.  
\* `member` - Non-owner organization members.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.listMembers({org, filter, role, per_page, page})
 * @apiExample {js} Promise
 * octokit.orgs.listMembers({org, filter, role, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/members/:username checkMembership
 * @apiName checkMembership
 * @apiDescription Check if a user is, publicly or privately, a member of the organization.

<a href="https://developer.github.com/v3/orgs/members/#check-membership">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.checkMembership({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.checkMembership({org, username}).then(result => {})
 */


/**
 * @api {DELETE} /orgs/:org/members/:username removeMember
 * @apiName removeMember
 * @apiDescription Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.

<a href="https://developer.github.com/v3/orgs/members/#remove-a-member">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.removeMember({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.removeMember({org, username}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/public_members listPublicMembers
 * @apiName listPublicMembers
 * @apiDescription Members of an organization can choose to have their membership publicized or not.

<a href="https://developer.github.com/v3/orgs/members/#public-members-list">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.listPublicMembers({org, per_page, page})
 * @apiExample {js} Promise
 * octokit.orgs.listPublicMembers({org, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/public_members/:username checkPublicMembership
 * @apiName checkPublicMembership
 * @apiDescription <a href="https://developer.github.com/v3/orgs/members/#check-public-membership">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.checkPublicMembership({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.checkPublicMembership({org, username}).then(result => {})
 */


/**
 * @api {PUT} /orgs/:org/public_members/:username publicizeMembership
 * @apiName publicizeMembership
 * @apiDescription The user can publicize their own membership. (A user cannot publicize the membership for another user.)

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

<a href="https://developer.github.com/v3/orgs/members/#publicize-a-users-membership">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.publicizeMembership({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.publicizeMembership({org, username}).then(result => {})
 */


/**
 * @api {DELETE} /orgs/:org/public_members/:username concealMembership
 * @apiName concealMembership
 * @apiDescription <a href="https://developer.github.com/v3/orgs/members/#conceal-a-users-membership">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.concealMembership({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.concealMembership({org, username}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/memberships/:username getMembership
 * @apiName getMembership
 * @apiDescription In order to get a user's membership with an organization, the authenticated user must be an organization member.

<a href="https://developer.github.com/v3/orgs/members/#get-organization-membership">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getMembership({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.getMembership({org, username}).then(result => {})
 */


/**
 * @api {PUT} /orgs/:org/memberships/:username addOrUpdateMembership
 * @apiName addOrUpdateMembership
 * @apiDescription Only authenticated organization owners can add a member to the organization or update the member's role.

*   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](#get-organization-membership) will be `pending` until they accept the invitation.
    
*   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.

**Rate limits**

To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.

<a href="https://developer.github.com/v3/orgs/members/#add-or-update-organization-membership">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiParam {string=admin,member} [role="member"]  The role to give the user in the organization. Can be one of:  
\* `admin` - The user will become an owner of the organization.  
\* `member` - The user will become a non-owner member of the organization.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.addOrUpdateMembership({org, username, role})
 * @apiExample {js} Promise
 * octokit.orgs.addOrUpdateMembership({org, username, role}).then(result => {})
 */


/**
 * @api {DELETE} /orgs/:org/memberships/:username removeMembership
 * @apiName removeMembership
 * @apiDescription In order to remove a user's membership with an organization, the authenticated user must be an organization owner.

If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.

<a href="https://developer.github.com/v3/orgs/members/#remove-organization-membership">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.removeMembership({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.removeMembership({org, username}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/invitations/:invitation_id/teams listInvitationTeams
 * @apiName listInvitationTeams
 * @apiDescription List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.

<a href="https://developer.github.com/v3/orgs/members/#list-organization-invitation-teams">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {integer} invitation_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.listInvitationTeams({org, invitation_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.orgs.listInvitationTeams({org, invitation_id, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/invitations listPendingInvitations
 * @apiName listPendingInvitations
 * @apiDescription The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.

<a href="https://developer.github.com/v3/orgs/members/#list-pending-organization-invitations">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.listPendingInvitations({org, per_page, page})
 * @apiExample {js} Promise
 * octokit.orgs.listPendingInvitations({org, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /orgs/:org/invitations createInvitation
 * @apiName createInvitation
 * @apiDescription Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

<a href="https://developer.github.com/v3/orgs/members/#create-organization-invitation">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {integer} [invitee_id]  **Required unless you provide `email`**. GitHub user ID for the person you are inviting.
 * @apiParam {string} [email]  **Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
 * @apiParam {string=admin,direct_member,billing_manager} [role="direct_member"]  Specify role for new member. Can be one of:  
\* `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.  
\* `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.  
\* `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
 * @apiParam {integer[]} [team_ids]  Specify IDs for the teams you want to invite new members to.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.createInvitation({org, invitee_id, email, role, team_ids})
 * @apiExample {js} Promise
 * octokit.orgs.createInvitation({org, invitee_id, email, role, team_ids}).then(result => {})
 */


/**
 * @api {GET} /user/memberships/orgs listMemberships
 * @apiName listMemberships
 * @apiDescription <a href="https://developer.github.com/v3/orgs/members/#list-your-organization-memberships">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string=active,pending} [state]  Indicates the state of the memberships to return. Can be either `active` or `pending`. If not specified, the API returns both active and pending memberships.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.listMemberships({state, per_page, page})
 * @apiExample {js} Promise
 * octokit.orgs.listMemberships({state, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/memberships/orgs/:org getMembershipForAuthenticatedUser
 * @apiName getMembershipForAuthenticatedUser
 * @apiDescription <a href="https://developer.github.com/v3/orgs/members/#get-your-organization-membership">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.getMembershipForAuthenticatedUser({org})
 * @apiExample {js} Promise
 * octokit.orgs.getMembershipForAuthenticatedUser({org}).then(result => {})
 */


/**
 * @api {PATCH} /user/memberships/orgs/:org updateMembership
 * @apiName updateMembership
 * @apiDescription <a href="https://developer.github.com/v3/orgs/members/#edit-your-organization-membership">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string=active} state  The state that the membership should be in. Only `"active"` will be accepted.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.updateMembership({org, state})
 * @apiExample {js} Promise
 * octokit.orgs.updateMembership({org, state}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/outside_collaborators listOutsideCollaborators
 * @apiName listOutsideCollaborators
 * @apiDescription List all users who are outside collaborators of an organization.



<a href="https://developer.github.com/v3/orgs/outside_collaborators/#list-outside-collaborators">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string=2fa_disabled,all} [filter="all"]  Filter the list of outside collaborators. Can be one of:  
\* `2fa_disabled`: Outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled.  
\* `all`: All outside collaborators.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.orgs.listOutsideCollaborators({org, filter, per_page, page})
 * @apiExample {js} Promise
 * octokit.orgs.listOutsideCollaborators({org, filter, per_page, page}).then(result => {})
 */


/**
 * @api {DELETE} /orgs/:org/outside_collaborators/:username removeOutsideCollaborator
 * @apiName removeOutsideCollaborator
 * @apiDescription Removing a user from this list will remove them from all the organization's repositories.

<a href="https://developer.github.com/v3/orgs/outside_collaborators/#remove-outside-collaborator">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.removeOutsideCollaborator({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.removeOutsideCollaborator({org, username}).then(result => {})
 */


/**
 * @api {PUT} /orgs/:org/outside_collaborators/:username convertMemberToOutsideCollaborator
 * @apiName convertMemberToOutsideCollaborator
 * @apiDescription When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)".

<a href="https://developer.github.com/v3/orgs/outside_collaborators/#convert-member-to-outside-collaborator">REST API doc</a>
 * @apiGroup Orgs
 *
 * @apiParam {string} org  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.orgs.convertMemberToOutsideCollaborator({org, username})
 * @apiExample {js} Promise
 * octokit.orgs.convertMemberToOutsideCollaborator({org, username}).then(result => {})
 */



/**,
 * Projects
 * @namespace Projects
 */


/**
 * @api {GET} /repos/:owner/:repo/projects listForRepo
 * @apiName listForRepo
 * @apiDescription **Note**: The status code may also be `401` or `410`, depending on the scope of the authenticating token.

<a href="https://developer.github.com/v3/projects/#list-repository-projects">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=open,closed,all} [state="open"]  Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.projects.listForRepo({owner, repo, state, per_page, page})
 * @apiExample {js} Promise
 * octokit.projects.listForRepo({owner, repo, state, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/projects listForOrg
 * @apiName listForOrg
 * @apiDescription **Note**: The status code may also be `401` or `410`, depending on the scope of the authenticating token.

<a href="https://developer.github.com/v3/projects/#list-organization-projects">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {string} org  
 * @apiParam {string=open,closed,all} [state="open"]  Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.projects.listForOrg({org, state, per_page, page})
 * @apiExample {js} Promise
 * octokit.projects.listForOrg({org, state, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /users/:username/projects listForUser
 * @apiName listForUser
 * @apiDescription <a href="https://developer.github.com/v3/projects/#list-user-projects">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {string} username  
 * @apiParam {string=open,closed,all} [state="open"]  Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.projects.listForUser({username, state, per_page, page})
 * @apiExample {js} Promise
 * octokit.projects.listForUser({username, state, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /projects/:project_id get
 * @apiName get
 * @apiDescription **Note**: The status code may also be `401` or `410`, depending on the scope of the authenticating token.

<a href="https://developer.github.com/v3/projects/#get-a-project">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} project_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.projects.get({project_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.projects.get({project_id, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/projects createForRepo
 * @apiName createForRepo
 * @apiDescription **Note**: The status code may also be `401` or `410`, depending on the scope of the authenticating token.

<a href="https://developer.github.com/v3/projects/#create-a-repository-project">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} name  The name of the project.
 * @apiParam {string} [body]  The description of the project.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.projects.createForRepo({owner, repo, name, body, per_page, page})
 * @apiExample {js} Promise
 * octokit.projects.createForRepo({owner, repo, name, body, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /orgs/:org/projects createForOrg
 * @apiName createForOrg
 * @apiDescription **Note**: The status code may also be `401` or `410`, depending on the scope of the authenticating token.

<a href="https://developer.github.com/v3/projects/#create-an-organization-project">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {string} org  
 * @apiParam {string} name  The name of the project.
 * @apiParam {string} [body]  The description of the project.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.projects.createForOrg({org, name, body, per_page, page})
 * @apiExample {js} Promise
 * octokit.projects.createForOrg({org, name, body, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /user/projects createForAuthenticatedUser
 * @apiName createForAuthenticatedUser
 * @apiDescription <a href="https://developer.github.com/v3/projects/#create-a-user-project">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {string} name  The name of the project.
 * @apiParam {string} [body]  The description of the project.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.projects.createForAuthenticatedUser({name, body, per_page, page})
 * @apiExample {js} Promise
 * octokit.projects.createForAuthenticatedUser({name, body, per_page, page}).then(result => {})
 */


/**
 * @api {PATCH} /projects/:project_id update
 * @apiName update
 * @apiDescription **Note**: The status code may also be `401` or `410`, depending on the scope of the authenticating token.

<a href="https://developer.github.com/v3/projects/#update-a-project">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} project_id  
 * @apiParam {string} [name]  The name of the project.
 * @apiParam {string} [body]  The description of the project.
 * @apiParam {string=open,closed} [state]  State of the project. Either `open` or `closed`.
 * @apiParam {string} [organization_permission]  The permission level that determines whether all members of the project's organization can see and/or make changes to the project. Setting `organization_permission` is only available for organization projects. If an organization member belongs to a team with a higher level of access or is a collaborator with a higher level of access, their permission level is not lowered by `organization_permission`. For information on changing access for a team or collaborator, see [Add or update team project](https://developer.github.com/v3/teams/#add-or-update-team-project) or [Add user as a collaborator](https://developer.github.com/v3/projects/collaborators/#add-user-as-a-collaborator).  
  
**Note:** Updating a project's `organization_permission` requires `admin` access to the project.  
  
Can be one of:  
\* `read` - Organization members can read, but not write to or administer this project.  
\* `write` - Organization members can read and write, but not administer this project.  
\* `admin` - Organization members can read, write and administer this project.  
\* `none` - Organization members can only see this project if it is public.
 * @apiParam {boolean} [private]  Sets the visibility of a project board. Setting `private` is only available for organization and user projects. **Note:** Updating a project's visibility requires `admin` access to the project.  
  
Can be one of:  
\* `false` - Anyone can see the project.  
\* `true` - Only the user can view a project board created on a user account. Organization members with the appropriate `organization_permission` can see project boards in an organization account.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.projects.update({project_id, name, body, state, organization_permission, private, per_page, page})
 * @apiExample {js} Promise
 * octokit.projects.update({project_id, name, body, state, organization_permission, private, per_page, page}).then(result => {})
 */


/**
 * @api {DELETE} /projects/:project_id delete
 * @apiName delete
 * @apiDescription <a href="https://developer.github.com/v3/projects/#delete-a-project">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} project_id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.delete({project_id})
 * @apiExample {js} Promise
 * octokit.projects.delete({project_id}).then(result => {})
 */


/**
 * @api {GET} /projects/columns/:column_id/cards listCards
 * @apiName listCards
 * @apiDescription <a href="https://developer.github.com/v3/projects/cards/#list-project-cards">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} column_id  
 * @apiParam {string=all,archived,not_archived} [archived_state="not_archived"]  Filters the project cards that are returned by the card's state. Can be one of `all`,`archived`, or `not_archived`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.projects.listCards({column_id, archived_state, per_page, page})
 * @apiExample {js} Promise
 * octokit.projects.listCards({column_id, archived_state, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /projects/columns/cards/:card_id getCard
 * @apiName getCard
 * @apiDescription <a href="https://developer.github.com/v3/projects/cards/#get-a-project-card">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} card_id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.getCard({card_id})
 * @apiExample {js} Promise
 * octokit.projects.getCard({card_id}).then(result => {})
 */


/**
 * @api {POST} /projects/columns/:column_id/cards createCard
 * @apiName createCard
 * @apiDescription **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.

Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.

<a href="https://developer.github.com/v3/projects/cards/#create-a-project-card">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} column_id  
 * @apiParam {string} [note]  The card's note content. Only valid for cards without another type of content, so you must omit when specifying `content_id` and `content_type`.
 * @apiParam {integer} [content_id]  The issue or pull request id you want to associate with this card. You can use the [List issues for a repository](https://developer.github.com/v3/issues/#list-issues-for-a-repository) and [List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests) endpoints to find this id.  
**Note:** Depending on whether you use the issue id or pull request id, you will need to specify `Issue` or `PullRequest` as the `content_type`.
 * @apiParam {string} [content_type]  **Required if you provide `content_id`**. The type of content you want to associate with this card. Use `Issue` when `content_id` is an issue id and use `PullRequest` when `content_id` is a pull request id.
 * @apiExample {js} async/await
 * const result = await octokit.projects.createCard({column_id, note, content_id, content_type})
 * @apiExample {js} Promise
 * octokit.projects.createCard({column_id, note, content_id, content_type}).then(result => {})
 */


/**
 * @api {PATCH} /projects/columns/cards/:card_id updateCard
 * @apiName updateCard
 * @apiDescription <a href="https://developer.github.com/v3/projects/cards/#update-a-project-card">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} card_id  
 * @apiParam {string} [note]  The card's note content. Only valid for cards without another type of content, so this cannot be specified if the card already has a `content_id` and `content_type`.
 * @apiParam {boolean} [archived]  Use `true` to archive a project card. Specify `false` if you need to restore a previously archived project card.
 * @apiExample {js} async/await
 * const result = await octokit.projects.updateCard({card_id, note, archived})
 * @apiExample {js} Promise
 * octokit.projects.updateCard({card_id, note, archived}).then(result => {})
 */


/**
 * @api {DELETE} /projects/columns/cards/:card_id deleteCard
 * @apiName deleteCard
 * @apiDescription <a href="https://developer.github.com/v3/projects/cards/#delete-a-project-card">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} card_id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.deleteCard({card_id})
 * @apiExample {js} Promise
 * octokit.projects.deleteCard({card_id}).then(result => {})
 */


/**
 * @api {POST} /projects/columns/cards/:card_id/moves moveCard
 * @apiName moveCard
 * @apiDescription <a href="https://developer.github.com/v3/projects/cards/#move-a-project-card">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} card_id  
 * @apiParam {string} position  Can be one of `top`, `bottom`, or `after:<card_id>`, where `<card_id>` is the `id` value of a card in the same column, or in the new column specified by `column_id`.
 * @apiParam {integer} [column_id]  The `id` value of a column in the same project.
 * @apiExample {js} async/await
 * const result = await octokit.projects.moveCard({card_id, position, column_id})
 * @apiExample {js} Promise
 * octokit.projects.moveCard({card_id, position, column_id}).then(result => {})
 */


/**
 * @api {GET} /projects/:project_id/collaborators listCollaborators
 * @apiName listCollaborators
 * @apiDescription Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.

<a href="https://developer.github.com/v3/projects/collaborators/#list-collaborators">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} project_id  
 * @apiParam {string=outside,direct,all} [affiliation="all"]  Filters the collaborators by their affiliation. Can be one of:  
\* `outside`: Outside collaborators of a project that are not a member of the project's organization.  
\* `direct`: Collaborators with permissions to a project, regardless of organization membership status.  
\* `all`: All collaborators the authenticated user can see.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.projects.listCollaborators({project_id, affiliation, per_page, page})
 * @apiExample {js} Promise
 * octokit.projects.listCollaborators({project_id, affiliation, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /projects/:project_id/collaborators/:username/permission reviewUserPermissionLevel
 * @apiName reviewUserPermissionLevel
 * @apiDescription Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.

<a href="https://developer.github.com/v3/projects/collaborators/#review-a-users-permission-level">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} project_id  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.projects.reviewUserPermissionLevel({project_id, username})
 * @apiExample {js} Promise
 * octokit.projects.reviewUserPermissionLevel({project_id, username}).then(result => {})
 */


/**
 * @api {PUT} /projects/:project_id/collaborators/:username addCollaborator
 * @apiName addCollaborator
 * @apiDescription Adds a collaborator to a an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.

<a href="https://developer.github.com/v3/projects/collaborators/#add-user-as-a-collaborator">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} project_id  
 * @apiParam {string} username  
 * @apiParam {string=read,write,admin} [permission="write"]  The permission to grant the collaborator. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)." Can be one of:  
\* `read` - can read, but not write to or administer this project.  
\* `write` - can read and write, but not administer this project.  
\* `admin` - can read, write and administer this project.
 * @apiExample {js} async/await
 * const result = await octokit.projects.addCollaborator({project_id, username, permission})
 * @apiExample {js} Promise
 * octokit.projects.addCollaborator({project_id, username, permission}).then(result => {})
 */


/**
 * @api {DELETE} /projects/:project_id/collaborators/:username removeCollaborator
 * @apiName removeCollaborator
 * @apiDescription Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.

<a href="https://developer.github.com/v3/projects/collaborators/#remove-user-as-a-collaborator">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} project_id  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.projects.removeCollaborator({project_id, username})
 * @apiExample {js} Promise
 * octokit.projects.removeCollaborator({project_id, username}).then(result => {})
 */


/**
 * @api {GET} /projects/:project_id/columns listColumns
 * @apiName listColumns
 * @apiDescription <a href="https://developer.github.com/v3/projects/columns/#list-project-columns">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} project_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.projects.listColumns({project_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.projects.listColumns({project_id, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /projects/columns/:column_id getColumn
 * @apiName getColumn
 * @apiDescription <a href="https://developer.github.com/v3/projects/columns/#get-a-project-column">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} column_id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.getColumn({column_id})
 * @apiExample {js} Promise
 * octokit.projects.getColumn({column_id}).then(result => {})
 */


/**
 * @api {POST} /projects/:project_id/columns createColumn
 * @apiName createColumn
 * @apiDescription <a href="https://developer.github.com/v3/projects/columns/#create-a-project-column">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} project_id  
 * @apiParam {string} name  The name of the column.
 * @apiExample {js} async/await
 * const result = await octokit.projects.createColumn({project_id, name})
 * @apiExample {js} Promise
 * octokit.projects.createColumn({project_id, name}).then(result => {})
 */


/**
 * @api {PATCH} /projects/columns/:column_id updateColumn
 * @apiName updateColumn
 * @apiDescription <a href="https://developer.github.com/v3/projects/columns/#update-a-project-column">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} column_id  
 * @apiParam {string} name  The new name of the column.
 * @apiExample {js} async/await
 * const result = await octokit.projects.updateColumn({column_id, name})
 * @apiExample {js} Promise
 * octokit.projects.updateColumn({column_id, name}).then(result => {})
 */


/**
 * @api {DELETE} /projects/columns/:column_id deleteColumn
 * @apiName deleteColumn
 * @apiDescription <a href="https://developer.github.com/v3/projects/columns/#delete-a-project-column">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} column_id  
 * @apiExample {js} async/await
 * const result = await octokit.projects.deleteColumn({column_id})
 * @apiExample {js} Promise
 * octokit.projects.deleteColumn({column_id}).then(result => {})
 */


/**
 * @api {POST} /projects/columns/:column_id/moves moveColumn
 * @apiName moveColumn
 * @apiDescription <a href="https://developer.github.com/v3/projects/columns/#move-a-project-column">REST API doc</a>
 * @apiGroup Projects
 *
 * @apiParam {integer} column_id  
 * @apiParam {string} position  Can be one of `first`, `last`, or `after:<column_id>`, where `<column_id>` is the `id` value of a column in the same project.
 * @apiExample {js} async/await
 * const result = await octokit.projects.moveColumn({column_id, position})
 * @apiExample {js} Promise
 * octokit.projects.moveColumn({column_id, position}).then(result => {})
 */



/**,
 * Pulls
 * @namespace Pulls
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls list
 * @apiName list
 * @apiDescription Draft pull requests are available in public repositories with GitHub Free and GitHub Pro, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

<a href="https://developer.github.com/v3/pulls/#list-pull-requests">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=open,closed,all} [state="open"]  Either `open`, `closed`, or `all` to filter by state.
 * @apiParam {string} [head]  Filter pulls by head user and branch name in the format of `user:ref-name`. Example: `github:new-script-format`.
 * @apiParam {string} [base]  Filter pulls by base branch name. Example: `gh-pages`.
 * @apiParam {string=created,updated,popularity,long-running} [sort="created"]  What to sort results by. Can be either `created`, `updated`, `popularity` (comment count) or `long-running` (age, filtering by pulls updated in the last month).
 * @apiParam {string=asc,desc} [direction="`desc` when sort is `created` or sort is not specified, otherwise `asc`"]  The direction of the sort. Can be either `asc` or `desc`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.list({owner, repo, state, head, base, sort, direction, per_page, page})
 * @apiExample {js} Promise
 * octokit.pulls.list({owner, repo, state, head, base, sort, direction, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number get
 * @apiName get
 * @apiDescription Draft pull requests are available in public repositories with GitHub Free and GitHub Pro, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Lists details of a pull request by providing its number.

When you get, [create](https://developer.github.com/v3/pulls/#create-a-pull-request), or [edit](https://developer.github.com/v3/pulls/#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)".

The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.

The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:

*   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
*   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
*   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.

Pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

<a href="https://developer.github.com/v3/pulls/#get-a-single-pull-request">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiExample {js} async/await
 * const result = await octokit.pulls.get({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.pulls.get({owner, repo, number}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls create
 * @apiName create
 * @apiDescription Draft pull requests are available in public repositories with GitHub Free and GitHub Pro, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

<a href="https://developer.github.com/v3/pulls/#create-a-pull-request">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} title  The title of the pull request.
 * @apiParam {string} head  The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`.
 * @apiParam {string} base  The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
 * @apiParam {string} [body]  The contents of the pull request.
 * @apiParam {boolean} [maintainer_can_modify]  Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.create({owner, repo, title, head, base, body, maintainer_can_modify})
 * @apiExample {js} Promise
 * octokit.pulls.create({owner, repo, title, head, base, body, maintainer_can_modify}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls createFromIssue
 * @apiName createFromIssue
 * @apiDescription Draft pull requests are available in public repositories with GitHub Free and GitHub Pro, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

<a href="https://developer.github.com/v3/pulls/#create-a-pull-request">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} issue  The issue number in this repository to turn into a Pull Request.
 * @apiParam {string} head  The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`.
 * @apiParam {string} base  The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
 * @apiParam {boolean} [maintainer_can_modify]  Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.createFromIssue({owner, repo, issue, head, base, maintainer_can_modify})
 * @apiExample {js} Promise
 * octokit.pulls.createFromIssue({owner, repo, issue, head, base, maintainer_can_modify}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/pulls/:number update
 * @apiName update
 * @apiDescription Draft pull requests are available in public repositories with GitHub Free and GitHub Pro, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

<a href="https://developer.github.com/v3/pulls/#update-a-pull-request">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string} [title]  The title of the pull request.
 * @apiParam {string} [body]  The contents of the pull request.
 * @apiParam {string=open,closed} [state]  State of this Pull Request. Either `open` or `closed`.
 * @apiParam {string} [base]  The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.
 * @apiParam {boolean} [maintainer_can_modify]  Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.update({owner, repo, number, title, body, state, base, maintainer_can_modify})
 * @apiExample {js} Promise
 * octokit.pulls.update({owner, repo, number, title, body, state, base, maintainer_can_modify}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/commits listCommits
 * @apiName listCommits
 * @apiDescription Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [Commit List API](https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository).

<a href="https://developer.github.com/v3/pulls/#list-commits-on-a-pull-request">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.listCommits({owner, repo, number, per_page, page})
 * @apiExample {js} Promise
 * octokit.pulls.listCommits({owner, repo, number, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/files listFiles
 * @apiName listFiles
 * @apiDescription **Note:** The response includes a maximum of 300 files.

<a href="https://developer.github.com/v3/pulls/#list-pull-requests-files">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.listFiles({owner, repo, number, per_page, page})
 * @apiExample {js} Promise
 * octokit.pulls.listFiles({owner, repo, number, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/merge checkIfMerged
 * @apiName checkIfMerged
 * @apiDescription <a href="https://developer.github.com/v3/pulls/#get-if-a-pull-request-has-been-merged">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiExample {js} async/await
 * const result = await octokit.pulls.checkIfMerged({owner, repo, number})
 * @apiExample {js} Promise
 * octokit.pulls.checkIfMerged({owner, repo, number}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/pulls/:number/merge merge
 * @apiName merge
 * @apiDescription This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

<a href="https://developer.github.com/v3/pulls/#merge-a-pull-request-merge-button">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string} [commit_title]  Title for the automatic commit message.
 * @apiParam {string} [commit_message]  Extra detail to append to automatic commit message.
 * @apiParam {string} [sha]  SHA that pull request head must match to allow merge.
 * @apiParam {string=merge,squash,rebase} [merge_method]  Merge method to use. Possible values are `merge`, `squash` or `rebase`. Default is `merge`.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.merge({owner, repo, number, commit_title, commit_message, sha, merge_method})
 * @apiExample {js} Promise
 * octokit.pulls.merge({owner, repo, number, commit_title, commit_message, sha, merge_method}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/comments listComments
 * @apiName listComments
 * @apiDescription By default, review comments are ordered by ascending ID.



<a href="https://developer.github.com/v3/pulls/comments/#list-comments-on-a-pull-request">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string=created,updated} [sort="created"]  Can be either `created` or `updated` comments.
 * @apiParam {string=asc,desc} [direction]  Can be either `asc` or `desc`. Ignored without `sort` parameter.
 * @apiParam {string} [since]  This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Only returns comments `updated` at or after this time.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.listComments({owner, repo, number, sort, direction, since, per_page, page})
 * @apiExample {js} Promise
 * octokit.pulls.listComments({owner, repo, number, sort, direction, since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/comments listCommentsForRepo
 * @apiName listCommentsForRepo
 * @apiDescription By default, review comments are ordered by ascending ID.



<a href="https://developer.github.com/v3/pulls/comments/#list-comments-in-a-repository">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=created,updated} [sort="created"]  Can be either `created` or `updated` comments.
 * @apiParam {string=asc,desc} [direction]  Can be either `asc` or `desc`. Ignored without `sort` parameter.
 * @apiParam {string} [since]  This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Only returns comments `updated` at or after this time.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.listCommentsForRepo({owner, repo, sort, direction, since, per_page, page})
 * @apiExample {js} Promise
 * octokit.pulls.listCommentsForRepo({owner, repo, sort, direction, since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/comments/:comment_id getComment
 * @apiName getComment
 * @apiDescription <a href="https://developer.github.com/v3/pulls/comments/#get-a-single-comment">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiExample {js} async/await
 * const result = await octokit.pulls.getComment({owner, repo, comment_id})
 * @apiExample {js} Promise
 * octokit.pulls.getComment({owner, repo, comment_id}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls/:number/comments createComment
 * @apiName createComment
 * @apiDescription This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://developer.github.com/v3/pulls/#get-a-single-pull-request) endpoint.

The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

<a href="https://developer.github.com/v3/pulls/comments/#create-a-comment">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string} body  The text of the comment.
 * @apiParam {string} commit_id  The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the `position`.
 * @apiParam {string} path  The relative path to the file that necessitates a comment.
 * @apiParam {integer} position  The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.createComment({owner, repo, number, body, commit_id, path, position})
 * @apiExample {js} Promise
 * octokit.pulls.createComment({owner, repo, number, body, commit_id, path, position}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls/:number/comments createCommentReply
 * @apiName createCommentReply
 * @apiDescription This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://developer.github.com/v3/pulls/#get-a-single-pull-request) endpoint.

The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

<a href="https://developer.github.com/v3/pulls/comments/#create-a-comment">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string} body  The text of the comment.
 * @apiParam {integer} in_reply_to  The comment ID to reply to. **Note**: This must be the ID of a _top-level comment_, not a reply to that comment. Replies to replies are not supported.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.createCommentReply({owner, repo, number, body, in_reply_to})
 * @apiExample {js} Promise
 * octokit.pulls.createCommentReply({owner, repo, number, body, in_reply_to}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/pulls/comments/:comment_id updateComment
 * @apiName updateComment
 * @apiDescription <a href="https://developer.github.com/v3/pulls/comments/#edit-a-comment">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiParam {string} body  The text of the comment.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.updateComment({owner, repo, comment_id, body})
 * @apiExample {js} Promise
 * octokit.pulls.updateComment({owner, repo, comment_id, body}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/pulls/comments/:comment_id deleteComment
 * @apiName deleteComment
 * @apiDescription <a href="https://developer.github.com/v3/pulls/comments/#delete-a-comment">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiExample {js} async/await
 * const result = await octokit.pulls.deleteComment({owner, repo, comment_id})
 * @apiExample {js} Promise
 * octokit.pulls.deleteComment({owner, repo, comment_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/requested_reviewers listReviewRequests
 * @apiName listReviewRequests
 * @apiDescription <a href="https://developer.github.com/v3/pulls/review_requests/#list-review-requests">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.listReviewRequests({owner, repo, number, per_page, page})
 * @apiExample {js} Promise
 * octokit.pulls.listReviewRequests({owner, repo, number, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls/:number/requested_reviewers createReviewRequest
 * @apiName createReviewRequest
 * @apiDescription This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

<a href="https://developer.github.com/v3/pulls/review_requests/#create-a-review-request">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string[]} [reviewers]  An array of user `login`s that will be requested.
 * @apiParam {string[]} [team_reviewers]  An array of team `slug`s that will be requested.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.createReviewRequest({owner, repo, number, reviewers, team_reviewers})
 * @apiExample {js} Promise
 * octokit.pulls.createReviewRequest({owner, repo, number, reviewers, team_reviewers}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/pulls/:number/requested_reviewers deleteReviewRequest
 * @apiName deleteReviewRequest
 * @apiDescription <a href="https://developer.github.com/v3/pulls/review_requests/#delete-a-review-request">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string[]} [reviewers]  An array of user `login`s that will be removed.
 * @apiParam {string[]} [team_reviewers]  An array of team `slug`s that will be removed.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.deleteReviewRequest({owner, repo, number, reviewers, team_reviewers})
 * @apiExample {js} Promise
 * octokit.pulls.deleteReviewRequest({owner, repo, number, reviewers, team_reviewers}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/reviews listReviews
 * @apiName listReviews
 * @apiDescription The list of reviews returns in chronological order.

<a href="https://developer.github.com/v3/pulls/reviews/#list-reviews-on-a-pull-request">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.listReviews({owner, repo, number, per_page, page})
 * @apiExample {js} Promise
 * octokit.pulls.listReviews({owner, repo, number, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/reviews/:review_id getReview
 * @apiName getReview
 * @apiDescription <a href="https://developer.github.com/v3/pulls/reviews/#get-a-single-review">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} review_id  
 * @apiExample {js} async/await
 * const result = await octokit.pulls.getReview({owner, repo, number, review_id})
 * @apiExample {js} Promise
 * octokit.pulls.getReview({owner, repo, number, review_id}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/pulls/:number/reviews/:review_id deletePendingReview
 * @apiName deletePendingReview
 * @apiDescription <a href="https://developer.github.com/v3/pulls/reviews/#delete-a-pending-review">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} review_id  
 * @apiExample {js} async/await
 * const result = await octokit.pulls.deletePendingReview({owner, repo, number, review_id})
 * @apiExample {js} Promise
 * octokit.pulls.deletePendingReview({owner, repo, number, review_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/:number/reviews/:review_id/comments getCommentsForReview
 * @apiName getCommentsForReview
 * @apiDescription <a href="https://developer.github.com/v3/pulls/reviews/#get-comments-for-a-single-review">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} review_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.getCommentsForReview({owner, repo, number, review_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.pulls.getCommentsForReview({owner, repo, number, review_id, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls/:number/reviews createReview
 * @apiName createReview
 * @apiDescription This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://developer.github.com/v3/pulls/#get-a-single-pull-request) endpoint.

The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

<a href="https://developer.github.com/v3/pulls/reviews/#create-a-pull-request-review">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string} [commit_id]  The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the `position`. Defaults to the most recent commit in the pull request when you do not specify a value.
 * @apiParam {string} [body]  **Required** when using `REQUEST_CHANGES` or `COMMENT` for the `event` parameter. The body text of the pull request review.
 * @apiParam {string=APPROVE,REQUEST_CHANGES,COMMENT} [event]  The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://developer.github.com/v3/pulls/reviews/#submit-a-pull-request-review) when you are ready.
 * @apiParam {object[]} [comments]  Use the following table to specify the location, destination, and contents of the draft review comment.
 * @apiParam {string} comments:path  The relative path to the file that necessitates a review comment.
 * @apiParam {integer} comments:position  The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.
 * @apiParam {string} comments:body  Text of the review comment.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.createReview({owner, repo, number, commit_id, body, event, comments, comments[].path, comments[].position, comments[].body})
 * @apiExample {js} Promise
 * octokit.pulls.createReview({owner, repo, number, commit_id, body, event, comments, comments[].path, comments[].position, comments[].body}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/pulls/:number/reviews/:review_id updateReview
 * @apiName updateReview
 * @apiDescription Update the review summary comment with new text.

<a href="https://developer.github.com/v3/pulls/reviews/#update-a-pull-request-review">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} review_id  
 * @apiParam {string} body  The body text of the pull request review.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.updateReview({owner, repo, number, review_id, body})
 * @apiExample {js} Promise
 * octokit.pulls.updateReview({owner, repo, number, review_id, body}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls/:number/reviews/:review_id/events submitReview
 * @apiName submitReview
 * @apiDescription <a href="https://developer.github.com/v3/pulls/reviews/#submit-a-pull-request-review">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} review_id  
 * @apiParam {string} [body]  The body text of the pull request review
 * @apiParam {string=APPROVE,REQUEST_CHANGES,COMMENT} event  The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.
 * @apiExample {js} async/await
 * const result = await octokit.pulls.submitReview({owner, repo, number, review_id, body, event})
 * @apiExample {js} Promise
 * octokit.pulls.submitReview({owner, repo, number, review_id, body, event}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/pulls/:number/reviews/:review_id/dismissals dismissReview
 * @apiName dismissReview
 * @apiDescription **Note:** To dismiss a pull request review on a [protected branch](https://developer.github.com/v3/repos/branches/), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.

<a href="https://developer.github.com/v3/pulls/reviews/#dismiss-a-pull-request-review">REST API doc</a>
 * @apiGroup Pulls
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {integer} review_id  
 * @apiParam {string} message  The message for the pull request review dismissal
 * @apiExample {js} async/await
 * const result = await octokit.pulls.dismissReview({owner, repo, number, review_id, message})
 * @apiExample {js} Promise
 * octokit.pulls.dismissReview({owner, repo, number, review_id, message}).then(result => {})
 */



/**,
 * RateLimit
 * @namespace RateLimit
 */


/**
 * @api {GET} /rate_limit get
 * @apiName get
 * @apiDescription **Note:** Accessing this endpoint does not count against your REST API rate limit.

**Understanding your rate limit status**

The Search API has a [custom rate limit](https://developer.github.com/v3/search/#rate-limit), separate from the rate limit governing the rest of the REST API. The GraphQL API also has a [custom rate limit](/v4/guides/resource-limitations/#rate-limit) that is separate from and calculated differently than rate limits in the REST API.

For these reasons, the Rate Limit API response categorizes your rate limit. Under `resources`, you'll see four objects:

*   The `core` object provides your rate limit status for all non-search-related resources in the REST API.
*   The `search` object provides your rate limit status for the [Search API](https://developer.github.com/v3/search/).
*   The `graphql` object provides your rate limit status for the [GraphQL API](/v4/).
*   The `integration_manifest` object provides your rate limit status for the [GitHub App Manifest code conversion](https://developer.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration) endpoint.

For more information on the headers and values in the rate limit response, see "[Rate limiting](https://developer.github.com/v3/#rate-limiting)."

The `rate` object (shown at the bottom of the response above) is deprecated.

If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.

<a href="https://developer.github.com/v3/rate_limit/#get-your-current-rate-limit-status">REST API doc</a>
 * @apiGroup RateLimit
 *
 * @apiExample {js} async/await
 * const result = await octokit.rateLimit.get({})
 * @apiExample {js} Promise
 * octokit.rateLimit.get({}).then(result => {})
 */



/**,
 * Reactions
 * @namespace Reactions
 */


/**
 * @api {GET} /repos/:owner/:repo/comments/:comment_id/reactions listForCommitComment
 * @apiName listForCommitComment
 * @apiDescription List the reactions to a [commit comment](https://developer.github.com/v3/repos/comments/).

<a href="https://developer.github.com/v3/reactions/#list-reactions-for-a-commit-comment">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} [content]  Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a commit comment.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.listForCommitComment({owner, repo, comment_id, content, per_page, page})
 * @apiExample {js} Promise
 * octokit.reactions.listForCommitComment({owner, repo, comment_id, content, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/comments/:comment_id/reactions createForCommitComment
 * @apiName createForCommitComment
 * @apiDescription Create a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this commit comment.

<a href="https://developer.github.com/v3/reactions/#create-reaction-for-a-commit-comment">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} content  The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the commit comment.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.createForCommitComment({owner, repo, comment_id, content})
 * @apiExample {js} Promise
 * octokit.reactions.createForCommitComment({owner, repo, comment_id, content}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/:number/reactions listForIssue
 * @apiName listForIssue
 * @apiDescription List the reactions to an [issue](https://developer.github.com/v3/issues/).

<a href="https://developer.github.com/v3/reactions/#list-reactions-for-an-issue">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} [content]  Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to an issue.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.listForIssue({owner, repo, number, content, per_page, page})
 * @apiExample {js} Promise
 * octokit.reactions.listForIssue({owner, repo, number, content, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/issues/:number/reactions createForIssue
 * @apiName createForIssue
 * @apiDescription Create a reaction to an [issue](https://developer.github.com/v3/issues/). A response with a `Status: 200 OK` means that you already added the reaction type to this issue.

<a href="https://developer.github.com/v3/reactions/#create-reaction-for-an-issue">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} number  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} content  The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the issue.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.createForIssue({owner, repo, number, content})
 * @apiExample {js} Promise
 * octokit.reactions.createForIssue({owner, repo, number, content}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/issues/comments/:comment_id/reactions listForIssueComment
 * @apiName listForIssueComment
 * @apiDescription List the reactions to an [issue comment](https://developer.github.com/v3/issues/comments/).

<a href="https://developer.github.com/v3/reactions/#list-reactions-for-an-issue-comment">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} [content]  Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to an issue comment.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.listForIssueComment({owner, repo, comment_id, content, per_page, page})
 * @apiExample {js} Promise
 * octokit.reactions.listForIssueComment({owner, repo, comment_id, content, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/issues/comments/:comment_id/reactions createForIssueComment
 * @apiName createForIssueComment
 * @apiDescription Create a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this issue comment.

<a href="https://developer.github.com/v3/reactions/#create-reaction-for-an-issue-comment">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} content  The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the issue comment.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.createForIssueComment({owner, repo, comment_id, content})
 * @apiExample {js} Promise
 * octokit.reactions.createForIssueComment({owner, repo, comment_id, content}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pulls/comments/:comment_id/reactions listForPullRequestReviewComment
 * @apiName listForPullRequestReviewComment
 * @apiDescription List the reactions to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).

<a href="https://developer.github.com/v3/reactions/#list-reactions-for-a-pull-request-review-comment">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} [content]  Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a pull request review comment.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.listForPullRequestReviewComment({owner, repo, comment_id, content, per_page, page})
 * @apiExample {js} Promise
 * octokit.reactions.listForPullRequestReviewComment({owner, repo, comment_id, content, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pulls/comments/:comment_id/reactions createForPullRequestReviewComment
 * @apiName createForPullRequestReviewComment
 * @apiDescription Create a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this pull request review comment.

<a href="https://developer.github.com/v3/reactions/#create-reaction-for-a-pull-request-review-comment">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} content  The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the pull request review comment.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.createForPullRequestReviewComment({owner, repo, comment_id, content})
 * @apiExample {js} Promise
 * octokit.reactions.createForPullRequestReviewComment({owner, repo, comment_id, content}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/discussions/:discussion_number/reactions listForTeamDiscussion
 * @apiName listForTeamDiscussion
 * @apiDescription List the reactions to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} discussion_number  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} [content]  Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.listForTeamDiscussion({team_id, discussion_number, content, per_page, page})
 * @apiExample {js} Promise
 * octokit.reactions.listForTeamDiscussion({team_id, discussion_number, content, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /teams/:team_id/discussions/:discussion_number/reactions createForTeamDiscussion
 * @apiName createForTeamDiscussion
 * @apiDescription Create a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion.

<a href="https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} discussion_number  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} content  The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.createForTeamDiscussion({team_id, discussion_number, content})
 * @apiExample {js} Promise
 * octokit.reactions.createForTeamDiscussion({team_id, discussion_number, content}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions listForTeamDiscussionComment
 * @apiName listForTeamDiscussionComment
 * @apiDescription List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} discussion_number  
 * @apiParam {integer} comment_number  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} [content]  Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.listForTeamDiscussionComment({team_id, discussion_number, comment_number, content, per_page, page})
 * @apiExample {js} Promise
 * octokit.reactions.listForTeamDiscussionComment({team_id, discussion_number, comment_number, content, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions createForTeamDiscussionComment
 * @apiName createForTeamDiscussionComment
 * @apiDescription Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion comment.

<a href="https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} discussion_number  
 * @apiParam {integer} comment_number  
 * @apiParam {string=+1,-1,laugh,confused,heart,hooray} content  The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion comment.
 * @apiExample {js} async/await
 * const result = await octokit.reactions.createForTeamDiscussionComment({team_id, discussion_number, comment_number, content})
 * @apiExample {js} Promise
 * octokit.reactions.createForTeamDiscussionComment({team_id, discussion_number, comment_number, content}).then(result => {})
 */


/**
 * @api {DELETE} /reactions/:reaction_id delete
 * @apiName delete
 * @apiDescription OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://developer.github.com/v3/teams/discussions/) or [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/).

<a href="https://developer.github.com/v3/reactions/#delete-a-reaction">REST API doc</a>
 * @apiGroup Reactions
 *
 * @apiParam {integer} reaction_id  
 * @apiExample {js} async/await
 * const result = await octokit.reactions.delete({reaction_id})
 * @apiExample {js} Promise
 * octokit.reactions.delete({reaction_id}).then(result => {})
 */



/**,
 * Repos
 * @namespace Repos
 */


/**
 * @api {GET} /user/repos list
 * @apiName list
 * @apiDescription List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

<a href="https://developer.github.com/v3/repos/#list-your-repositories">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string=all,public,private} [visibility="all"]  Can be one of `all`, `public`, or `private`.
 * @apiParam {string} [affiliation="owner,collaborator,organization_member"]  Comma-separated list of values. Can include:  
\* `owner`: Repositories that are owned by the authenticated user.  
\* `collaborator`: Repositories that the user has been added to as a collaborator.  
\* `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
 * @apiParam {string=all,owner,public,private,member} [type="all"]  Can be one of `all`, `owner`, `public`, `private`, `member`. Default: `all`  
  
Will cause a `422` error if used in the same request as **visibility** or **affiliation**. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
 * @apiParam {string=created,updated,pushed,full_name} [sort="full_name"]  Can be one of `created`, `updated`, `pushed`, `full_name`.
 * @apiParam {string=asc,desc} [direction="`asc` when using `full_name`, otherwise `desc`"]  Can be one of `asc` or `desc`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.list({visibility, affiliation, type, sort, direction, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.list({visibility, affiliation, type, sort, direction, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /users/:username/repos listForUser
 * @apiName listForUser
 * @apiDescription List public repositories for the specified user.

<a href="https://developer.github.com/v3/repos/#list-user-repositories">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} username  
 * @apiParam {string=all,owner,member} [type="owner"]  Can be one of `all`, `owner`, `member`.
 * @apiParam {string=created,updated,pushed,full_name} [sort="full_name"]  Can be one of `created`, `updated`, `pushed`, `full_name`.
 * @apiParam {string=asc,desc} [direction="`asc` when using `full_name`, otherwise `desc`"]  Can be one of `asc` or `desc`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listForUser({username, type, sort, direction, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listForUser({username, type, sort, direction, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /orgs/:org/repos listForOrg
 * @apiName listForOrg
 * @apiDescription List repositories for the specified org.

<a href="https://developer.github.com/v3/repos/#list-organization-repositories">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} org  
 * @apiParam {string=all,public,private,forks,sources,member} [type="all"]  Can be one of `all`, `public`, `private`, `forks`, `sources`, `member`.
 * @apiParam {string=created,updated,pushed,full_name} [sort="created"]  Can be one of `created`, `updated`, `pushed`, `full_name`.
 * @apiParam {string=asc,desc} [direction="when using `full_name`: `asc`, otherwise `desc`"]  Can be one of `asc` or `desc`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listForOrg({org, type, sort, direction, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listForOrg({org, type, sort, direction, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repositories listPublic
 * @apiName listPublic
 * @apiDescription This provides a dump of every public repository, in the order that they were created.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of repositories.

<a href="https://developer.github.com/v3/repos/#list-all-public-repositories">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} [since]  The integer ID of the last Repository that you've seen.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listPublic({since, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listPublic({since, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /user/repos createForAuthenticatedUser
 * @apiName createForAuthenticatedUser
 * @apiDescription **Note**: There are two endpoints for creating a repository: one to create a repository on a user account, and one to create a repository in an organization. The organization endpoint is fully enabled for [GitHub Apps](https://developer.github.com/v3/apps/available-endpoints/), whereas the user endpoint is enabled only for [user-to-server requests](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests).

**OAuth scope requirements**

When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository
*   `repo` scope to create a private repository

<a href="https://developer.github.com/v3/repos/#create">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} name  The name of the repository.
 * @apiParam {string} [description]  A short description of the repository.
 * @apiParam {string} [homepage]  A URL with more information about the repository.
 * @apiParam {boolean} [private="false"]  Either `true` to create a private repository or `false` to create a public one. Creating private repositories requires a paid GitHub account.
 * @apiParam {boolean} [has_issues="true"]  Either `true` to enable issues for this repository or `false` to disable them.
 * @apiParam {boolean} [has_projects="true"]  Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
 * @apiParam {boolean} [has_wiki="true"]  Either `true` to enable the wiki for this repository or `false` to disable it.
 * @apiParam {integer} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
 * @apiParam {boolean} [auto_init="false"]  Pass `true` to create an initial commit with empty README.
 * @apiParam {string} [gitignore_template]  Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".
 * @apiParam {string} [license_template]  Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".
 * @apiParam {boolean} [allow_squash_merge="true"]  Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
 * @apiParam {boolean} [allow_merge_commit="true"]  Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
 * @apiParam {boolean} [allow_rebase_merge="true"]  Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createForAuthenticatedUser({name, description, homepage, private, has_issues, has_projects, has_wiki, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, allow_rebase_merge})
 * @apiExample {js} Promise
 * octokit.repos.createForAuthenticatedUser({name, description, homepage, private, has_issues, has_projects, has_wiki, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, allow_rebase_merge}).then(result => {})
 */


/**
 * @api {POST} /orgs/:org/repos createInOrg
 * @apiName createInOrg
 * @apiDescription **Note**: There are two endpoints for creating a repository: one to create a repository on a user account, and one to create a repository in an organization. The organization endpoint is fully enabled for [GitHub Apps](https://developer.github.com/v3/apps/available-endpoints/), whereas the user endpoint is enabled only for [user-to-server requests](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests).

**OAuth scope requirements**

When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository
*   `repo` scope to create a private repository

<a href="https://developer.github.com/v3/repos/#create">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} org  
 * @apiParam {string} name  The name of the repository.
 * @apiParam {string} [description]  A short description of the repository.
 * @apiParam {string} [homepage]  A URL with more information about the repository.
 * @apiParam {boolean} [private="false"]  Either `true` to create a private repository or `false` to create a public one. Creating private repositories requires a paid GitHub account.
 * @apiParam {boolean} [has_issues="true"]  Either `true` to enable issues for this repository or `false` to disable them.
 * @apiParam {boolean} [has_projects="true"]  Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
 * @apiParam {boolean} [has_wiki="true"]  Either `true` to enable the wiki for this repository or `false` to disable it.
 * @apiParam {integer} [team_id]  The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
 * @apiParam {boolean} [auto_init="false"]  Pass `true` to create an initial commit with empty README.
 * @apiParam {string} [gitignore_template]  Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".
 * @apiParam {string} [license_template]  Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".
 * @apiParam {boolean} [allow_squash_merge="true"]  Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
 * @apiParam {boolean} [allow_merge_commit="true"]  Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
 * @apiParam {boolean} [allow_rebase_merge="true"]  Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createInOrg({org, name, description, homepage, private, has_issues, has_projects, has_wiki, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, allow_rebase_merge})
 * @apiExample {js} Promise
 * octokit.repos.createInOrg({org, name, description, homepage, private, has_issues, has_projects, has_wiki, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, allow_rebase_merge}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo get
 * @apiName get
 * @apiDescription The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.

<a href="https://developer.github.com/v3/repos/#get">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.get({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.get({owner, repo}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo update
 * @apiName update
 * @apiDescription **Note**: To edit a repository's topics, use the [`topics` endpoint](#replace-all-topics-for-a-repository).

<a href="https://developer.github.com/v3/repos/#edit">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} name  The name of the repository.
 * @apiParam {string} [description]  A short description of the repository.
 * @apiParam {string} [homepage]  A URL with more information about the repository.
 * @apiParam {boolean} [private="false"]  Either `true` to make the repository private or `false` to make it public. Creating private repositories requires a paid GitHub account. Default: `false`.  
**Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private. **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
 * @apiParam {boolean} [has_issues="true"]  Either `true` to enable issues for this repository or `false` to disable them.
 * @apiParam {boolean} [has_projects="true"]  Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
 * @apiParam {boolean} [has_wiki="true"]  Either `true` to enable the wiki for this repository or `false` to disable it.
 * @apiParam {string} [default_branch]  Updates the default branch for this repository.
 * @apiParam {boolean} [allow_squash_merge="true"]  Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
 * @apiParam {boolean} [allow_merge_commit="true"]  Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
 * @apiParam {boolean} [allow_rebase_merge="true"]  Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
 * @apiParam {boolean} [archived="false"]  `true` to archive this repository. **Note**: You cannot unarchive repositories through the API.
 * @apiExample {js} async/await
 * const result = await octokit.repos.update({owner, repo, name, description, homepage, private, has_issues, has_projects, has_wiki, default_branch, allow_squash_merge, allow_merge_commit, allow_rebase_merge, archived})
 * @apiExample {js} Promise
 * octokit.repos.update({owner, repo, name, description, homepage, private, has_issues, has_projects, has_wiki, default_branch, allow_squash_merge, allow_merge_commit, allow_rebase_merge, archived}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/topics listTopics
 * @apiName listTopics
 * @apiDescription <a href="https://developer.github.com/v3/repos/#list-all-topics-for-a-repository">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.listTopics({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.listTopics({owner, repo}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/topics replaceTopics
 * @apiName replaceTopics
 * @apiDescription <a href="https://developer.github.com/v3/repos/#replace-all-topics-for-a-repository">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string[]} names  An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository.
 * @apiExample {js} async/await
 * const result = await octokit.repos.replaceTopics({owner, repo, names})
 * @apiExample {js} Promise
 * octokit.repos.replaceTopics({owner, repo, names}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/contributors listContributors
 * @apiName listContributors
 * @apiDescription Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.

GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.

<a href="https://developer.github.com/v3/repos/#list-contributors">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [anon]  Set to `1` or `true` to include anonymous contributors in results.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listContributors({owner, repo, anon, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listContributors({owner, repo, anon, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/languages listLanguages
 * @apiName listLanguages
 * @apiDescription Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.

<a href="https://developer.github.com/v3/repos/#list-languages">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.listLanguages({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.listLanguages({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/teams listTeams
 * @apiName listTeams
 * @apiDescription <a href="https://developer.github.com/v3/repos/#list-teams">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listTeams({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listTeams({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/tags listTags
 * @apiName listTags
 * @apiDescription <a href="https://developer.github.com/v3/repos/#list-tags">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listTags({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listTags({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo delete
 * @apiName delete
 * @apiDescription Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.

If an organization owner has configured the organization to prevent members from deleting organization-owned repositories, a member will get this response:

<a href="https://developer.github.com/v3/repos/#delete-a-repository">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.delete({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.delete({owner, repo}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/transfer transfer
 * @apiName transfer
 * @apiDescription A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://help.github.com/articles/about-repository-transfers/).

<a href="https://developer.github.com/v3/repos/#transfer-a-repository">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [new_owner]  **Required:** The username or organization name the repository will be transferred to.
 * @apiParam {integer[]} [team_ids]  ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
 * @apiExample {js} async/await
 * const result = await octokit.repos.transfer({owner, repo, new_owner, team_ids})
 * @apiExample {js} Promise
 * octokit.repos.transfer({owner, repo, new_owner, team_ids}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches listBranches
 * @apiName listBranches
 * @apiDescription <a href="https://developer.github.com/v3/repos/branches/#list-branches">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {boolean} [protected]  Setting to `true` returns only protected branches. When set to `false`, only unprotected branches are returned. Omitting this parameter returns all branches.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listBranches({owner, repo, protected, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listBranches({owner, repo, protected, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch getBranch
 * @apiName getBranch
 * @apiDescription <a href="https://developer.github.com/v3/repos/branches/#get-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getBranch({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.getBranch({owner, repo, branch}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection getBranchProtection
 * @apiName getBranchProtection
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

<a href="https://developer.github.com/v3/repos/branches/#get-branch-protection">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getBranchProtection({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.getBranchProtection({owner, repo, branch}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/branches/:branch/protection updateBranchProtection
 * @apiName updateBranchProtection
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Protecting a branch requires admin or owner permissions to the repository.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

**Note**: The list of users and teams in total is limited to 100 items.

<a href="https://developer.github.com/v3/repos/branches/#update-branch-protection">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {object} required_status_checks  Require status checks to pass before merging. Set to `null` to disable.
 * @apiParam {boolean} required_status_checks:strict  Require branches to be up to date before merging.
 * @apiParam {string[]} required_status_checks:contexts  The list of status checks to require in order to merge into this branch
 * @apiParam {boolean} enforce_admins  Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable.
 * @apiParam {object} required_pull_request_reviews  Require at least one approving review on a pull request, before merging. Set to `null` to disable.
 * @apiParam {object} [required_pull_request_reviews:dismissal_restrictions]  Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
 * @apiParam {string[]} [required_pull_request_reviews:dismissal_restrictions:users]  The list of user `login`s with dismissal access
 * @apiParam {string[]} [required_pull_request_reviews:dismissal_restrictions:teams]  The list of team `slug`s with dismissal access
 * @apiParam {boolean} [required_pull_request_reviews:dismiss_stale_reviews]  Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
 * @apiParam {boolean} [required_pull_request_reviews:require_code_owner_reviews]  Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) review them.
 * @apiParam {integer} [required_pull_request_reviews:required_approving_review_count]  Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6.
 * @apiParam {object} restrictions  Restrict who can push to this branch. Team and user `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
 * @apiParam {string[]} [restrictions:users]  The list of user `login`s with push access
 * @apiParam {string[]} [restrictions:teams]  The list of team `slug`s with push access
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateBranchProtection({owner, repo, branch, required_status_checks, required_status_checks.strict, required_status_checks.contexts, enforce_admins, required_pull_request_reviews, required_pull_request_reviews.dismissal_restrictions, required_pull_request_reviews.dismissal_restrictions.users, required_pull_request_reviews.dismissal_restrictions.teams, required_pull_request_reviews.dismiss_stale_reviews, required_pull_request_reviews.require_code_owner_reviews, required_pull_request_reviews.required_approving_review_count, restrictions, restrictions.users, restrictions.teams})
 * @apiExample {js} Promise
 * octokit.repos.updateBranchProtection({owner, repo, branch, required_status_checks, required_status_checks.strict, required_status_checks.contexts, enforce_admins, required_pull_request_reviews, required_pull_request_reviews.dismissal_restrictions, required_pull_request_reviews.dismissal_restrictions.users, required_pull_request_reviews.dismissal_restrictions.teams, required_pull_request_reviews.dismiss_stale_reviews, required_pull_request_reviews.require_code_owner_reviews, required_pull_request_reviews.required_approving_review_count, restrictions, restrictions.users, restrictions.teams}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection removeBranchProtection
 * @apiName removeBranchProtection
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

<a href="https://developer.github.com/v3/repos/branches/#remove-branch-protection">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeBranchProtection({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.removeBranchProtection({owner, repo, branch}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/required_status_checks getProtectedBranchRequiredStatusChecks
 * @apiName getProtectedBranchRequiredStatusChecks
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

<a href="https://developer.github.com/v3/repos/branches/#get-required-status-checks-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getProtectedBranchRequiredStatusChecks({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.getProtectedBranchRequiredStatusChecks({owner, repo, branch}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/branches/:branch/protection/required_status_checks updateProtectedBranchRequiredStatusChecks
 * @apiName updateProtectedBranchRequiredStatusChecks
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.

<a href="https://developer.github.com/v3/repos/branches/#update-required-status-checks-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {boolean} [strict]  Require branches to be up to date before merging.
 * @apiParam {string[]} [contexts]  The list of status checks to require in order to merge into this branch
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateProtectedBranchRequiredStatusChecks({owner, repo, branch, strict, contexts})
 * @apiExample {js} Promise
 * octokit.repos.updateProtectedBranchRequiredStatusChecks({owner, repo, branch, strict, contexts}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/required_status_checks removeProtectedBranchRequiredStatusChecks
 * @apiName removeProtectedBranchRequiredStatusChecks
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

<a href="https://developer.github.com/v3/repos/branches/#remove-required-status-checks-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchRequiredStatusChecks({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchRequiredStatusChecks({owner, repo, branch}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts listProtectedBranchRequiredStatusChecksContexts
 * @apiName listProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

<a href="https://developer.github.com/v3/repos/branches/#list-required-status-checks-contexts-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.listProtectedBranchRequiredStatusChecksContexts({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.listProtectedBranchRequiredStatusChecksContexts({owner, repo, branch}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts replaceProtectedBranchRequiredStatusChecksContexts
 * @apiName replaceProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

<a href="https://developer.github.com/v3/repos/branches/#replace-required-status-checks-contexts-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} contexts  
 * @apiExample {js} async/await
 * const result = await octokit.repos.replaceProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts})
 * @apiExample {js} Promise
 * octokit.repos.replaceProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts addProtectedBranchRequiredStatusChecksContexts
 * @apiName addProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

<a href="https://developer.github.com/v3/repos/branches/#add-required-status-checks-contexts-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} contexts  
 * @apiExample {js} async/await
 * const result = await octokit.repos.addProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts})
 * @apiExample {js} Promise
 * octokit.repos.addProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts removeProtectedBranchRequiredStatusChecksContexts
 * @apiName removeProtectedBranchRequiredStatusChecksContexts
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

<a href="https://developer.github.com/v3/repos/branches/#remove-required-status-checks-contexts-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} contexts  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchRequiredStatusChecksContexts({owner, repo, branch, contexts}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews getProtectedBranchPullRequestReviewEnforcement
 * @apiName getProtectedBranchPullRequestReviewEnforcement
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

<a href="https://developer.github.com/v3/repos/branches/#get-pull-request-review-enforcement-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getProtectedBranchPullRequestReviewEnforcement({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.getProtectedBranchPullRequestReviewEnforcement({owner, repo, branch}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews updateProtectedBranchPullRequestReviewEnforcement
 * @apiName updateProtectedBranchPullRequestReviewEnforcement
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

<a href="https://developer.github.com/v3/repos/branches/#update-pull-request-review-enforcement-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {object} [dismissal_restrictions]  Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
 * @apiParam {string[]} [dismissal_restrictions:users]  The list of user `login`s with dismissal access
 * @apiParam {string[]} [dismissal_restrictions:teams]  The list of team `slug`s with dismissal access
 * @apiParam {boolean} [dismiss_stale_reviews]  Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
 * @apiParam {boolean} [require_code_owner_reviews]  Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) have reviewed.
 * @apiParam {integer} [required_approving_review_count]  Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6.
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, dismissal_restrictions, dismissal_restrictions.users, dismissal_restrictions.teams, dismiss_stale_reviews, require_code_owner_reviews, required_approving_review_count})
 * @apiExample {js} Promise
 * octokit.repos.updateProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, dismissal_restrictions, dismissal_restrictions.users, dismissal_restrictions.teams, dismiss_stale_reviews, require_code_owner_reviews, required_approving_review_count}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews removeProtectedBranchPullRequestReviewEnforcement
 * @apiName removeProtectedBranchPullRequestReviewEnforcement
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

<a href="https://developer.github.com/v3/repos/branches/#remove-pull-request-review-enforcement-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchPullRequestReviewEnforcement({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchPullRequestReviewEnforcement({owner, repo, branch}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/required_signatures getProtectedBranchRequiredSignatures
 * @apiName getProtectedBranchRequiredSignatures
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg) in GitHub Help.

**Note**: You must enable branch protection to require signed commits.

<a href="https://developer.github.com/v3/repos/branches/#get-required-signatures-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getProtectedBranchRequiredSignatures({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.getProtectedBranchRequiredSignatures({owner, repo, branch}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/branches/:branch/protection/required_signatures addProtectedBranchRequiredSignatures
 * @apiName addProtectedBranchRequiredSignatures
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.

<a href="https://developer.github.com/v3/repos/branches/#add-required-signatures-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.addProtectedBranchRequiredSignatures({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.addProtectedBranchRequiredSignatures({owner, repo, branch}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/required_signatures removeProtectedBranchRequiredSignatures
 * @apiName removeProtectedBranchRequiredSignatures
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.

<a href="https://developer.github.com/v3/repos/branches/#remove-required-signatures-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchRequiredSignatures({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchRequiredSignatures({owner, repo, branch}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/enforce_admins getProtectedBranchAdminEnforcement
 * @apiName getProtectedBranchAdminEnforcement
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

<a href="https://developer.github.com/v3/repos/branches/#get-admin-enforcement-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getProtectedBranchAdminEnforcement({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.getProtectedBranchAdminEnforcement({owner, repo, branch}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/branches/:branch/protection/enforce_admins addProtectedBranchAdminEnforcement
 * @apiName addProtectedBranchAdminEnforcement
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

<a href="https://developer.github.com/v3/repos/branches/#add-admin-enforcement-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.addProtectedBranchAdminEnforcement({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.addProtectedBranchAdminEnforcement({owner, repo, branch}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/enforce_admins removeProtectedBranchAdminEnforcement
 * @apiName removeProtectedBranchAdminEnforcement
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

<a href="https://developer.github.com/v3/repos/branches/#remove-admin-enforcement-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchAdminEnforcement({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchAdminEnforcement({owner, repo, branch}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/restrictions getProtectedBranchRestrictions
 * @apiName getProtectedBranchRestrictions
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

**Note**: Teams and users `restrictions` are only available for organization-owned repositories.

<a href="https://developer.github.com/v3/repos/branches/#get-restrictions-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getProtectedBranchRestrictions({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.getProtectedBranchRestrictions({owner, repo, branch}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/restrictions removeProtectedBranchRestrictions
 * @apiName removeProtectedBranchRestrictions
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Disables the ability to restrict who can push to this branch.

<a href="https://developer.github.com/v3/repos/branches/#remove-restrictions-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchRestrictions({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchRestrictions({owner, repo, branch}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams listProtectedBranchTeamRestrictions
 * @apiName listProtectedBranchTeamRestrictions
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Lists the teams who have push access to this branch. If you pass the `hellcat-preview` media type, the list includes child teams.

<a href="https://developer.github.com/v3/repos/branches/#list-team-restrictions-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listProtectedBranchTeamRestrictions({owner, repo, branch, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listProtectedBranchTeamRestrictions({owner, repo, branch, per_page, page}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams replaceProtectedBranchTeamRestrictions
 * @apiName replaceProtectedBranchTeamRestrictions
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. If you pass the `hellcat-preview` media type, you can include child teams.

| Type    | Description                                                                                                                         |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users and teams in total is limited to 100 items. |

<a href="https://developer.github.com/v3/repos/branches/#replace-team-restrictions-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} teams  
 * @apiExample {js} async/await
 * const result = await octokit.repos.replaceProtectedBranchTeamRestrictions({owner, repo, branch, teams})
 * @apiExample {js} Promise
 * octokit.repos.replaceProtectedBranchTeamRestrictions({owner, repo, branch, teams}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams addProtectedBranchTeamRestrictions
 * @apiName addProtectedBranchTeamRestrictions
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Grants the specified teams push access for this branch. If you pass the `hellcat-preview` media type, you can also give push access to child teams.

| Type    | Description                                                                                                                         |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users and teams in total is limited to 100 items. |

<a href="https://developer.github.com/v3/repos/branches/#add-team-restrictions-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} teams  
 * @apiExample {js} async/await
 * const result = await octokit.repos.addProtectedBranchTeamRestrictions({owner, repo, branch, teams})
 * @apiExample {js} Promise
 * octokit.repos.addProtectedBranchTeamRestrictions({owner, repo, branch, teams}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/restrictions/teams removeProtectedBranchTeamRestrictions
 * @apiName removeProtectedBranchTeamRestrictions
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Removes the ability of a team to push to this branch. If you pass the `hellcat-preview` media type, you can include child teams.

| Type    | Description                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users and teams in total is limited to 100 items. |

<a href="https://developer.github.com/v3/repos/branches/#remove-team-restrictions-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} teams  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchTeamRestrictions({owner, repo, branch, teams})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchTeamRestrictions({owner, repo, branch, teams}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/branches/:branch/protection/restrictions/users listProtectedBranchUserRestrictions
 * @apiName listProtectedBranchUserRestrictions
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Lists the people who have push access to this branch.

<a href="https://developer.github.com/v3/repos/branches/#list-user-restrictions-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiExample {js} async/await
 * const result = await octokit.repos.listProtectedBranchUserRestrictions({owner, repo, branch})
 * @apiExample {js} Promise
 * octokit.repos.listProtectedBranchUserRestrictions({owner, repo, branch}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/branches/:branch/protection/restrictions/users replaceProtectedBranchUserRestrictions
 * @apiName replaceProtectedBranchUserRestrictions
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.

| Type    | Description                                                                                                            |
| ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users and teams in total is limited to 100 items. |

<a href="https://developer.github.com/v3/repos/branches/#replace-user-restrictions-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} users  
 * @apiExample {js} async/await
 * const result = await octokit.repos.replaceProtectedBranchUserRestrictions({owner, repo, branch, users})
 * @apiExample {js} Promise
 * octokit.repos.replaceProtectedBranchUserRestrictions({owner, repo, branch, users}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/branches/:branch/protection/restrictions/users addProtectedBranchUserRestrictions
 * @apiName addProtectedBranchUserRestrictions
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Grants the specified people push access for this branch.

| Type    | Description                                                                                                            |
| ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users and teams in total is limited to 100 items. |

<a href="https://developer.github.com/v3/repos/branches/#add-user-restrictions-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} users  
 * @apiExample {js} async/await
 * const result = await octokit.repos.addProtectedBranchUserRestrictions({owner, repo, branch, users})
 * @apiExample {js} Promise
 * octokit.repos.addProtectedBranchUserRestrictions({owner, repo, branch, users}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/branches/:branch/protection/restrictions/users removeProtectedBranchUserRestrictions
 * @apiName removeProtectedBranchUserRestrictions
 * @apiDescription Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's billing plans](https://help.github.com/articles/github-s-billing-plans) in the GitHub Help documentation.

Removes the ability of a team to push to this branch.

| Type    | Description                                                                                                                            |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames of the people who should no longer have push access. **Note**: The list of users and teams in total is limited to 100 items. |

<a href="https://developer.github.com/v3/repos/branches/#remove-user-restrictions-of-protected-branch">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} branch  
 * @apiParam {string[]} users  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeProtectedBranchUserRestrictions({owner, repo, branch, users})
 * @apiExample {js} Promise
 * octokit.repos.removeProtectedBranchUserRestrictions({owner, repo, branch, users}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/collaborators listCollaborators
 * @apiName listCollaborators
 * @apiDescription For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

If you pass the `hellcat-preview` media type, team members will include the members of child teams.

<a href="https://developer.github.com/v3/repos/collaborators/#list-collaborators">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=outside,direct,all} [affiliation="all"]  Filter collaborators returned by their affiliation. Can be one of:  
\* `outside`: All outside collaborators of an organization-owned repository.  
\* `direct`: All collaborators with permissions to an organization-owned repository, regardless of organization membership status.  
\* `all`: All collaborators the authenticated user can see.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listCollaborators({owner, repo, affiliation, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listCollaborators({owner, repo, affiliation, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/collaborators/:username checkCollaborator
 * @apiName checkCollaborator
 * @apiDescription For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

If you pass the `hellcat-preview` media type, team members will include the members of child teams.

<a href="https://developer.github.com/v3/repos/collaborators/#check-if-a-user-is-a-collaborator">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.repos.checkCollaborator({owner, repo, username})
 * @apiExample {js} Promise
 * octokit.repos.checkCollaborator({owner, repo, username}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/collaborators/:username/permission getCollaboratorPermissionLevel
 * @apiName getCollaboratorPermissionLevel
 * @apiDescription Possible values for the `permission` key: `admin`, `write`, `read`, `none`.

<a href="https://developer.github.com/v3/repos/collaborators/#review-a-users-permission-level">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCollaboratorPermissionLevel({owner, repo, username})
 * @apiExample {js} Promise
 * octokit.repos.getCollaboratorPermissionLevel({owner, repo, username}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/collaborators/:username addCollaborator
 * @apiName addCollaborator
 * @apiDescription This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://developer.github.com/v3/repos/invitations/).

**Rate limits**

To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.

<a href="https://developer.github.com/v3/repos/collaborators/#add-user-as-a-collaborator">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} username  
 * @apiParam {string=pull,push,admin} [permission="push"]  The permission to grant the collaborator. **Only valid on organization-owned repositories.** Can be one of:  
\* `pull` - can pull, but not push to or administer this repository.  
\* `push` - can pull and push, but not administer this repository.  
\* `admin` - can pull, push and administer this repository.
 * @apiExample {js} async/await
 * const result = await octokit.repos.addCollaborator({owner, repo, username, permission})
 * @apiExample {js} Promise
 * octokit.repos.addCollaborator({owner, repo, username, permission}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/collaborators/:username removeCollaborator
 * @apiName removeCollaborator
 * @apiDescription <a href="https://developer.github.com/v3/repos/collaborators/#remove-user-as-a-collaborator">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeCollaborator({owner, repo, username})
 * @apiExample {js} Promise
 * octokit.repos.removeCollaborator({owner, repo, username}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/comments listCommitComments
 * @apiName listCommitComments
 * @apiDescription Commit Comments use [these custom media types](#custom-media-types). You can read more about the use of media types in the API [here](https://developer.github.com/v3/media/).

Comments are ordered by ascending ID.



<a href="https://developer.github.com/v3/repos/comments/#list-commit-comments-for-a-repository">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listCommitComments({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listCommitComments({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits/:ref/comments listCommentsForCommit
 * @apiName listCommentsForCommit
 * @apiDescription <a href="https://developer.github.com/v3/repos/comments/#list-comments-for-a-single-commit">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listCommentsForCommit({owner, repo, ref, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listCommentsForCommit({owner, repo, ref, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/commits/:sha/comments createCommitComment
 * @apiName createCommitComment
 * @apiDescription This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

<a href="https://developer.github.com/v3/repos/comments/#create-a-commit-comment">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} sha  
 * @apiParam {string} body  The contents of the comment.
 * @apiParam {string} [path]  Relative path of the file to comment on.
 * @apiParam {integer} [position]  Line index in the diff to comment on.
 * @apiParam {integer} [line]  **Deprecated**. Use **position** parameter instead. Line number in the file to comment on.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createCommitComment({owner, repo, sha, body, path, position, line})
 * @apiExample {js} Promise
 * octokit.repos.createCommitComment({owner, repo, sha, body, path, position, line}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/comments/:comment_id getCommitComment
 * @apiName getCommitComment
 * @apiDescription <a href="https://developer.github.com/v3/repos/comments/#get-a-single-commit-comment">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCommitComment({owner, repo, comment_id})
 * @apiExample {js} Promise
 * octokit.repos.getCommitComment({owner, repo, comment_id}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/comments/:comment_id updateCommitComment
 * @apiName updateCommitComment
 * @apiDescription <a href="https://developer.github.com/v3/repos/comments/#update-a-commit-comment">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiParam {string} body  The contents of the comment
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateCommitComment({owner, repo, comment_id, body})
 * @apiExample {js} Promise
 * octokit.repos.updateCommitComment({owner, repo, comment_id, body}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/comments/:comment_id deleteCommitComment
 * @apiName deleteCommitComment
 * @apiDescription <a href="https://developer.github.com/v3/repos/comments/#delete-a-commit-comment">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} comment_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteCommitComment({owner, repo, comment_id})
 * @apiExample {js} Promise
 * octokit.repos.deleteCommitComment({owner, repo, comment_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits listCommits
 * @apiName listCommits
 * @apiDescription <a href="https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [sha="the repository’s default branch (usually `master`):"]  SHA or branch to start listing commits from.
 * @apiParam {string} [path]  Only commits containing this file path will be returned.
 * @apiParam {string} [author]  GitHub login or email address by which to filter by commit author.
 * @apiParam {string} [since]  Only commits after this date will be returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {string} [until]  Only commits before this date will be returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listCommits({owner, repo, sha, path, author, since, until, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listCommits({owner, repo, sha, path, author, since, until, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits/:sha getCommit
 * @apiName getCommit
 * @apiDescription Diffs with binary data will have no 'patch' property. Pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

<a href="https://developer.github.com/v3/repos/commits/#get-a-single-commit">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} sha  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCommit({owner, repo, sha})
 * @apiExample {js} Promise
 * octokit.repos.getCommit({owner, repo, sha}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits/:ref getCommitRefSha
 * @apiName getCommitRefSha
 * @apiDescription Users with read access can get the SHA-1 of a commit reference:

To access the API you must provide a custom [media type](https://developer.github.com/v3/media) in the `Accept` header:



To check if a remote reference's SHA-1 is the same as your local reference's SHA-1, make a `GET` request and provide the current SHA-1 for the local reference as the ETag.

The SHA-1 of the commit reference.



<a href="https://developer.github.com/v3/repos/commits/#get-the-sha-1-of-a-commit-reference">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCommitRefSha({owner, repo, ref})
 * @apiExample {js} Promise
 * octokit.repos.getCommitRefSha({owner, repo, ref}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/compare/:base...:head compareCommits
 * @apiName compareCommits
 * @apiDescription Both `:base` and `:head` must be branch names in `:repo`. To compare branches across other repositories in the same network as `:repo`, use the format `<USERNAME>:branch`. For example:

```
GET /repos/:owner/:repo/compare/hubot:branchname...octocat:branchname
```

The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in reverse chronological order.

Pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

**Working with large comparisons**

The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the [Commit List API](https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository) to enumerate all commits in the range.

For comparisons with extremely large diffs, you may receive an error response indicating that the diff took too long to generate. You can typically resolve this error by using a smaller commit range.

<a href="https://developer.github.com/v3/repos/commits/#compare-two-commits">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} base  
 * @apiParam {string} head  
 * @apiExample {js} async/await
 * const result = await octokit.repos.compareCommits({owner, repo, base, head})
 * @apiExample {js} Promise
 * octokit.repos.compareCommits({owner, repo, base, head}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/community/profile retrieveCommunityProfileMetrics
 * @apiName retrieveCommunityProfileMetrics
 * @apiDescription This endpoint will return all community profile metrics, including an overall health score, repository description, the presence of documentation, detected code of conduct, detected license, and the presence of ISSUE\_TEMPLATE, PULL\_REQUEST\_TEMPLATE, README, and CONTRIBUTING files.

<a href="https://developer.github.com/v3/repos/community/#retrieve-community-profile-metrics">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.retrieveCommunityProfileMetrics({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.retrieveCommunityProfileMetrics({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/readme getReadme
 * @apiName getReadme
 * @apiDescription Gets the preferred README for a repository.

READMEs support [custom media types](#custom-media-types) for retrieving the raw content or rendered HTML.

<a href="https://developer.github.com/v3/repos/contents/#get-the-readme">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [ref="the repository’s default branch (usually `master`)"]  The name of the commit/branch/tag.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getReadme({owner, repo, ref})
 * @apiExample {js} Promise
 * octokit.repos.getReadme({owner, repo, ref}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/contents/:path getContents
 * @apiName getContents
 * @apiDescription Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit `:path`, you will receive the contents of all files in the repository.

Files and symlinks support [a custom media type](#custom-media-types) for retrieving the raw content or rendered HTML (when supported). All content types support [a custom media type](#custom-media-types) to ensure the content is returned in a consistent object format.

**Note**:

*   To get a repository's contents recursively, you can [recursively get the tree](https://developer.github.com/v3/git/trees/).
*   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees API](https://developer.github.com/v3/git/trees/#get-a-tree).
*   This API supports files up to 1 megabyte in size.

The response will be an array of objects, one object for each item in the directory.

When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value _should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW). In the next major version of the API, the type will be returned as "submodule".

If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the API responds with the content of the file (in the [format shown above](#response-if-content-is-a-file)).

Otherwise, the API responds with an object describing the symlink itself:

The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out the submodule at that specific commit.

If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the github.com URLs (`html_url` and `_links["html"]`) will have null values.

<a href="https://developer.github.com/v3/repos/contents/#get-contents">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} path  
 * @apiParam {string} [ref="the repository’s default branch (usually `master`)"]  The name of the commit/branch/tag.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getContents({owner, repo, path, ref})
 * @apiExample {js} Promise
 * octokit.repos.getContents({owner, repo, path, ref}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/contents/:path createFile
 * @apiName createFile
 * @apiDescription Creates a new file in a repository.

<a href="https://developer.github.com/v3/repos/contents/#create-a-file">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} path  
 * @apiParam {string} message  The commit message.
 * @apiParam {string} content  The new file content, using Base64 encoding.
 * @apiParam {string} [branch="the repository’s default branch (usually `master`)"]  The branch name.
 * @apiParam {object} [committer="the authenticated user:"]  The person that committed the file.
 * @apiParam {string} committer:name  The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
 * @apiParam {string} committer:email  The email of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
 * @apiParam {object} [author="The `committer` or the authenticated user if you omit `committer`:"]  The author of the file.
 * @apiParam {string} author:name  The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
 * @apiParam {string} author:email  The email of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createFile({owner, repo, path, message, content, branch, committer, committer.name, committer.email, author, author.name, author.email})
 * @apiExample {js} Promise
 * octokit.repos.createFile({owner, repo, path, message, content, branch, committer, committer.name, committer.email, author, author.name, author.email}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/contents/:path updateFile
 * @apiName updateFile
 * @apiDescription Updates a file in a repository.

<a href="https://developer.github.com/v3/repos/contents/#update-a-file">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} path  
 * @apiParam {string} message  The commit message.
 * @apiParam {string} content  The new file content, using Base64 encoding.
 * @apiParam {string} sha  The blob SHA of the file being replaced.
 * @apiParam {string} [branch="the repository’s default branch (usually `master`)"]  The branch name.
 * @apiParam {object} [committer="the authenticated user:"]  The person that committed the file.
 * @apiParam {string} committer:name  The name of the author or committer of the commit. You'll receive a `422` status code if you omit `name`.
 * @apiParam {string} committer:email  The email of the author or committer of the commit. You'll receive a `422` status code if you omit `name`.
 * @apiParam {object} [author="The `committer` or the authenticated user if you omit `committer`:"]  The author of the file.
 * @apiParam {string} author:name  The name of the author or committer of the commit. You'll receive a `422` status code if you omit `name`.
 * @apiParam {string} author:email  The email of the author or committer of the commit. You'll receive a `422` status code if you omit `name`.
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateFile({owner, repo, path, message, content, sha, branch, committer, committer.name, committer.email, author, author.name, author.email})
 * @apiExample {js} Promise
 * octokit.repos.updateFile({owner, repo, path, message, content, sha, branch, committer, committer.name, committer.email, author, author.name, author.email}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/contents/:path deleteFile
 * @apiName deleteFile
 * @apiDescription Deletes a file in a repository.

The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.

You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.

Both the `author` and `committer` parameters have the same keys:

| name  | type   | description                                          |
| ----- | ------ | ---------------------------------------------------- |
| name  | string | The name of the author (or committer) of the commit  |
| email | string | The email of the author (or committer) of the commit |

<a href="https://developer.github.com/v3/repos/contents/#delete-a-file">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} path  
 * @apiParam {string} message  The commit message.
 * @apiParam {string} sha  The blob SHA of the file being replaced.
 * @apiParam {string} [branch="the repository’s default branch (usually `master`)"]  The branch name.
 * @apiParam {object} [committer]  object containing information about the committer.
 * @apiParam {object} [author]  object containing information about the author.
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteFile({owner, repo, path, message, sha, branch, committer, author})
 * @apiExample {js} Promise
 * octokit.repos.deleteFile({owner, repo, path, message, sha, branch, committer, author}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/:archive_format/:ref getArchiveLink
 * @apiName getArchiveLink
 * @apiDescription Gets a redirect URL to download an archive for a repository. The `:archive_format` can be either `tarball` or `zipball`. The `:ref` must be a valid Git reference. If you omit `:ref`, the repository’s default branch (usually `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use the `Location` header to make a second `GET` request.

_Note_: For private repositories, these links are temporary and expire after five minutes.

To follow redirects with curl, use the `-L` switch:



<a href="https://developer.github.com/v3/repos/contents/#get-archive-link">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} archive_format  
 * @apiParam {string} ref  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getArchiveLink({owner, repo, archive_format, ref})
 * @apiExample {js} Promise
 * octokit.repos.getArchiveLink({owner, repo, archive_format, ref}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/deployments listDeployments
 * @apiName listDeployments
 * @apiDescription Simple filtering of deployments is available via query parameters:

<a href="https://developer.github.com/v3/repos/deployments/#list-deployments">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [sha="none"]  The SHA recorded at creation time.
 * @apiParam {string} [ref="none"]  The name of the ref. This can be a branch, tag, or SHA.
 * @apiParam {string} [task="none"]  The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`).
 * @apiParam {string} [environment="none"]  The name of the environment that was deployed to (e.g., `staging` or `production`).
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listDeployments({owner, repo, sha, ref, task, environment, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listDeployments({owner, repo, sha, ref, task, environment, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/deployments/:deployment_id getDeployment
 * @apiName getDeployment
 * @apiDescription <a href="https://developer.github.com/v3/repos/deployments/#get-a-single-deployment">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} deployment_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getDeployment({owner, repo, deployment_id})
 * @apiExample {js} Promise
 * octokit.repos.getDeployment({owner, repo, deployment_id}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/deployments createDeployment
 * @apiName createDeployment
 * @apiDescription Deployments offer a few configurable parameters with sane defaults.

The `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them before we merge a pull request.

The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter makes it easier to track which environments have requested deployments. The default environment is `production`.

The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds, the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will return a failure response.

By default, [commit statuses](https://developer.github.com/v3/repos/statuses) for every submitted context must be in a `success` state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do not require any contexts or create any commit statuses, the deployment will always succeed.

The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text field that will be passed on when a deployment event is dispatched.

The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an application with debugging enabled.

Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref:

A simple example putting the user and room into the payload to notify back to chat networks.

A more advanced example specifying required commit statuses and bypassing auto-merging.

You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating a deployment. This auto-merge happens when:

*   Auto-merge option is enabled in the repository
*   Topic branch does not include the latest changes on the base branch, which is `master`in the response example
*   There are no merge conflicts

If there are no new commits in the base branch, a new request to create a deployment should give a successful response.

This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.

This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success` status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.

<a href="https://developer.github.com/v3/repos/deployments/#create-a-deployment">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  The ref to deploy. This can be a branch, tag, or SHA.
 * @apiParam {string} [task="deploy"]  Specifies a task to execute (e.g., `deploy` or `deploy:migrations`).
 * @apiParam {boolean} [auto_merge="true"]  Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.
 * @apiParam {string[]} [required_contexts]  The [status](https://developer.github.com/v3/repos/statuses/) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.
 * @apiParam {string} [payload=""""]  JSON payload with extra information about the deployment.
 * @apiParam {string} [environment="production"]  Name for the target deployment environment (e.g., `production`, `staging`, `qa`).
 * @apiParam {string} [description=""""]  Short description of the deployment.
 * @apiParam {boolean} [transient_environment="false"]  Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: `false`  
**Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type.
 * @apiParam {boolean} [production_environment="`true` when `environment` is `production` and `false` otherwise"]  Specifies if the given environment is one that end-users directly interact with. Default: `true` when `environment` is `production` and `false` otherwise.  
**Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type.  
 * @apiExample {js} async/await
 * const result = await octokit.repos.createDeployment({owner, repo, ref, task, auto_merge, required_contexts, payload, environment, description, transient_environment, production_environment})
 * @apiExample {js} Promise
 * octokit.repos.createDeployment({owner, repo, ref, task, auto_merge, required_contexts, payload, environment, description, transient_environment, production_environment}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/deployments/:deployment_id/statuses listDeploymentStatuses
 * @apiName listDeploymentStatuses
 * @apiDescription Users with pull access can view deployment statuses for a deployment:

<a href="https://developer.github.com/v3/repos/deployments/#list-deployment-statuses">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} deployment_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listDeploymentStatuses({owner, repo, deployment_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listDeploymentStatuses({owner, repo, deployment_id, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id getDeploymentStatus
 * @apiName getDeploymentStatus
 * @apiDescription Users with pull access can view a deployment status for a deployment:

<a href="https://developer.github.com/v3/repos/deployments/#get-a-single-deployment-status">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} deployment_id  
 * @apiParam {integer} status_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getDeploymentStatus({owner, repo, deployment_id, status_id})
 * @apiExample {js} Promise
 * octokit.repos.getDeploymentStatus({owner, repo, deployment_id, status_id}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/deployments/:deployment_id/statuses createDeploymentStatus
 * @apiName createDeploymentStatus
 * @apiDescription Users with `push` access can create deployment statuses for a given deployment.

GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.

<a href="https://developer.github.com/v3/repos/deployments/#create-a-deployment-status">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} deployment_id  
 * @apiParam {string=error,failure,inactive,in_progress,queued,pending,success} state  The state of the status. Can be one of `error`, `failure`, `inactive`, `in_progress`, `queued` `pending`, or `success`. **Note:** To use the `inactive` state, you must provide the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. To use the `in_progress` and `queued` states, you must provide the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type.
 * @apiParam {string} [target_url=""""]  The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. **Note:** It's recommended to use the `log_url` parameter, which replaces `target_url`.
 * @apiParam {string} [log_url=""""]  The full URL of the deployment's output. This parameter replaces `target_url`. We will continue to accept `target_url` to support legacy uses, but we recommend replacing `target_url` with `log_url`. Setting `log_url` will automatically set `target_url` to the same value. Default: `""`  
**Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type.
 * @apiParam {string} [description=""""]  A short description of the status. The maximum description length is 140 characters.
 * @apiParam {string=production,staging,qa} [environment]  Name for the target deployment environment, which can be changed when setting a deploy status. For example, `production`, `staging`, or `qa`. **Note:** This parameter requires you to use the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type.
 * @apiParam {string} [environment_url=""""]  Sets the URL for accessing your environment. Default: `""`  
**Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type.
 * @apiParam {boolean} [auto_inactive="true"]  Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. An `inactive` status is only added to deployments that had a `success` state. Default: `true`  
**Note:** To add an `inactive` status to `production` environments, you must use the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type.  
**Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. **Note:** To add an `inactive` status to `production` environments, you must use the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type.  
 * @apiExample {js} async/await
 * const result = await octokit.repos.createDeploymentStatus({owner, repo, deployment_id, state, target_url, log_url, description, environment, environment_url, auto_inactive})
 * @apiExample {js} Promise
 * octokit.repos.createDeploymentStatus({owner, repo, deployment_id, state, target_url, log_url, description, environment, environment_url, auto_inactive}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/downloads listDownloads
 * @apiName listDownloads
 * @apiDescription <a href="https://developer.github.com/v3/repos/downloads/#list-downloads-for-a-repository">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listDownloads({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listDownloads({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/downloads/:download_id getDownload
 * @apiName getDownload
 * @apiDescription <a href="https://developer.github.com/v3/repos/downloads/#get-a-single-download">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} download_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getDownload({owner, repo, download_id})
 * @apiExample {js} Promise
 * octokit.repos.getDownload({owner, repo, download_id}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/downloads/:download_id deleteDownload
 * @apiName deleteDownload
 * @apiDescription <a href="https://developer.github.com/v3/repos/downloads/#delete-a-download">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} download_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteDownload({owner, repo, download_id})
 * @apiExample {js} Promise
 * octokit.repos.deleteDownload({owner, repo, download_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/forks listForks
 * @apiName listForks
 * @apiDescription <a href="https://developer.github.com/v3/repos/forks/#list-forks">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=newest,oldest,stargazers} [sort="newest"]  The sort order. Can be either `newest`, `oldest`, or `stargazers`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listForks({owner, repo, sort, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listForks({owner, repo, sort, per_page, page}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/forks createFork
 * @apiName createFork
 * @apiDescription Create a fork for the authenticated user.

**Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Support](https://github.com/contact).

<a href="https://developer.github.com/v3/repos/forks/#create-a-fork">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [organization]  Optional parameter to specify the organization name if forking into an organization.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createFork({owner, repo, organization})
 * @apiExample {js} Promise
 * octokit.repos.createFork({owner, repo, organization}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/hooks listHooks
 * @apiName listHooks
 * @apiDescription <a href="https://developer.github.com/v3/repos/hooks/#list-hooks">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listHooks({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listHooks({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/hooks/:hook_id getHook
 * @apiName getHook
 * @apiDescription <a href="https://developer.github.com/v3/repos/hooks/#get-single-hook">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} hook_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getHook({owner, repo, hook_id})
 * @apiExample {js} Promise
 * octokit.repos.getHook({owner, repo, hook_id}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/hooks createHook
 * @apiName createHook
 * @apiDescription Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can share the same `config` as long as those webhooks do not have any `events` that overlap.

Here's how you can create a hook that posts payloads in JSON format:

<a href="https://developer.github.com/v3/repos/hooks/#create-a-hook">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [name="web"]  Use `web` to create a webhook. This parameter only accepts the value `web`.
 * @apiParam {object} config  Key/value pairs to provide settings for this webhook. [These are defined below](#create-hook-config-params).
 * @apiParam {string} config:url  The URL to which the payloads will be delivered.
 * @apiParam {string} [config:content_type]  The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
 * @apiParam {string} [config:secret]  If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/#delivery-headers) header.
 * @apiParam {string} [config:insecure_ssl]  Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
 * @apiParam {string[]} [events="["push"]"]  Determines what [events](https://developer.github.com/v3/activity/events/types/) the hook is triggered for.
 * @apiParam {boolean} [active="true"]  Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createHook({owner, repo, name, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active})
 * @apiExample {js} Promise
 * octokit.repos.createHook({owner, repo, name, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/hooks/:hook_id updateHook
 * @apiName updateHook
 * @apiDescription <a href="https://developer.github.com/v3/repos/hooks/#edit-a-hook">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} hook_id  
 * @apiParam {object} [config]  Key/value pairs to provide settings for this webhook. [These are defined below](#create-hook-config-params).
 * @apiParam {string} config:url  The URL to which the payloads will be delivered.
 * @apiParam {string} [config:content_type]  The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
 * @apiParam {string} [config:secret]  If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/#delivery-headers) header.
 * @apiParam {string} [config:insecure_ssl]  Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
 * @apiParam {string[]} [events="["push"]"]  Determines what [events](https://developer.github.com/v3/activity/events/types/) the hook is triggered for. This replaces the entire array of events.
 * @apiParam {string[]} [add_events]  Determines a list of events to be added to the list of events that the Hook triggers for.
 * @apiParam {string[]} [remove_events]  Determines a list of events to be removed from the list of events that the Hook triggers for.
 * @apiParam {boolean} [active="true"]  Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateHook({owner, repo, hook_id, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, add_events, remove_events, active})
 * @apiExample {js} Promise
 * octokit.repos.updateHook({owner, repo, hook_id, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, add_events, remove_events, active}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/hooks/:hook_id/tests testPushHook
 * @apiName testPushHook
 * @apiDescription This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.

**Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`

<a href="https://developer.github.com/v3/repos/hooks/#test-a-push-hook">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} hook_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.testPushHook({owner, repo, hook_id})
 * @apiExample {js} Promise
 * octokit.repos.testPushHook({owner, repo, hook_id}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/hooks/:hook_id/pings pingHook
 * @apiName pingHook
 * @apiDescription This will trigger a [ping event](https://developer.github.com/webhooks/#ping-event) to be sent to the hook.

<a href="https://developer.github.com/v3/repos/hooks/#ping-a-hook">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} hook_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.pingHook({owner, repo, hook_id})
 * @apiExample {js} Promise
 * octokit.repos.pingHook({owner, repo, hook_id}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/hooks/:hook_id deleteHook
 * @apiName deleteHook
 * @apiDescription <a href="https://developer.github.com/v3/repos/hooks/#delete-a-hook">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} hook_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteHook({owner, repo, hook_id})
 * @apiExample {js} Promise
 * octokit.repos.deleteHook({owner, repo, hook_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/invitations listInvitations
 * @apiName listInvitations
 * @apiDescription When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.



<a href="https://developer.github.com/v3/repos/invitations/#list-invitations-for-a-repository">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listInvitations({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listInvitations({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/invitations/:invitation_id deleteInvitation
 * @apiName deleteInvitation
 * @apiDescription <a href="https://developer.github.com/v3/repos/invitations/#delete-a-repository-invitation">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} invitation_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteInvitation({owner, repo, invitation_id})
 * @apiExample {js} Promise
 * octokit.repos.deleteInvitation({owner, repo, invitation_id}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/invitations/:invitation_id updateInvitation
 * @apiName updateInvitation
 * @apiDescription <a href="https://developer.github.com/v3/repos/invitations/#update-a-repository-invitation">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} invitation_id  
 * @apiParam {string=read,write,admin} [permissions]  The permissions that the associated user will have on the repository. Valid values are `read`, `write`, and `admin`.
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateInvitation({owner, repo, invitation_id, permissions})
 * @apiExample {js} Promise
 * octokit.repos.updateInvitation({owner, repo, invitation_id, permissions}).then(result => {})
 */


/**
 * @api {GET} /user/repository_invitations listInvitationsForAuthenticatedUser
 * @apiName listInvitationsForAuthenticatedUser
 * @apiDescription When authenticating as a user, this endpoint will list all currently open repository invitations for that user.



<a href="https://developer.github.com/v3/repos/invitations/#list-a-users-repository-invitations">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listInvitationsForAuthenticatedUser({per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listInvitationsForAuthenticatedUser({per_page, page}).then(result => {})
 */


/**
 * @api {PATCH} /user/repository_invitations/:invitation_id acceptInvitation
 * @apiName acceptInvitation
 * @apiDescription <a href="https://developer.github.com/v3/repos/invitations/#accept-a-repository-invitation">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {integer} invitation_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.acceptInvitation({invitation_id})
 * @apiExample {js} Promise
 * octokit.repos.acceptInvitation({invitation_id}).then(result => {})
 */


/**
 * @api {DELETE} /user/repository_invitations/:invitation_id declineInvitation
 * @apiName declineInvitation
 * @apiDescription <a href="https://developer.github.com/v3/repos/invitations/#decline-a-repository-invitation">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {integer} invitation_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.declineInvitation({invitation_id})
 * @apiExample {js} Promise
 * octokit.repos.declineInvitation({invitation_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/keys listDeployKeys
 * @apiName listDeployKeys
 * @apiDescription <a href="https://developer.github.com/v3/repos/keys/#list-deploy-keys">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listDeployKeys({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listDeployKeys({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/keys/:key_id getDeployKey
 * @apiName getDeployKey
 * @apiDescription <a href="https://developer.github.com/v3/repos/keys/#get-a-deploy-key">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} key_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getDeployKey({owner, repo, key_id})
 * @apiExample {js} Promise
 * octokit.repos.getDeployKey({owner, repo, key_id}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/keys addDeployKey
 * @apiName addDeployKey
 * @apiDescription Here's how you can create a read-only deploy key:



<a href="https://developer.github.com/v3/repos/keys/#add-a-new-deploy-key">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [title]  A name for the key.
 * @apiParam {string} key  The contents of the key.
 * @apiParam {boolean} [read_only]  If `true`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.  
  
Deploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see "[Repository permission levels for an organization](https://help.github.com/articles/repository-permission-levels-for-an-organization/)" and "[Permission levels for a user account repository](https://help.github.com/articles/permission-levels-for-a-user-account-repository/)."
 * @apiExample {js} async/await
 * const result = await octokit.repos.addDeployKey({owner, repo, title, key, read_only})
 * @apiExample {js} Promise
 * octokit.repos.addDeployKey({owner, repo, title, key, read_only}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/keys/:key_id removeDeployKey
 * @apiName removeDeployKey
 * @apiDescription <a href="https://developer.github.com/v3/repos/keys/#remove-a-deploy-key">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} key_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.removeDeployKey({owner, repo, key_id})
 * @apiExample {js} Promise
 * octokit.repos.removeDeployKey({owner, repo, key_id}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/merges merge
 * @apiName merge
 * @apiDescription <a href="https://developer.github.com/v3/repos/merging/#perform-a-merge">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} base  The name of the base branch that the head will be merged into.
 * @apiParam {string} head  The head to merge. This can be a branch name or a commit SHA1.
 * @apiParam {string} [commit_message]  Commit message to use for the merge commit. If omitted, a default message will be used.
 * @apiExample {js} async/await
 * const result = await octokit.repos.merge({owner, repo, base, head, commit_message})
 * @apiExample {js} Promise
 * octokit.repos.merge({owner, repo, base, head, commit_message}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pages getPages
 * @apiName getPages
 * @apiDescription <a href="https://developer.github.com/v3/repos/pages/#get-information-about-a-pages-site">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getPages({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getPages({owner, repo}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pages enablePagesSite
 * @apiName enablePagesSite
 * @apiDescription <a href="https://developer.github.com/v3/repos/pages/#enable-a-pages-site">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=master,gh-pages} [source[branch]]  The repository branch used to publish your [site's source files](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/). Can be either `master` or `gh-pages`.
 * @apiParam {string} [source[path]]  The repository directory that includes the source files for the Pages site. When `branch` is `master`, you can change `path` to `/docs`. When `branch` is `gh-pages`, you are unable to specify a `path` other than `/`.
 * @apiExample {js} async/await
 * const result = await octokit.repos.enablePagesSite({owner, repo, source[branch], source[path]})
 * @apiExample {js} Promise
 * octokit.repos.enablePagesSite({owner, repo, source[branch], source[path]}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/pages disablePagesSite
 * @apiName disablePagesSite
 * @apiDescription <a href="https://developer.github.com/v3/repos/pages/#disable-a-pages-site">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.disablePagesSite({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.disablePagesSite({owner, repo}).then(result => {})
 */


/**
 * @api {PUT} /repos/:owner/:repo/pages updateInformationAboutPagesSite
 * @apiName updateInformationAboutPagesSite
 * @apiDescription <a href="https://developer.github.com/v3/repos/pages/#update-information-about-a-pages-site">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} [cname]  Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)."
 * @apiParam {string="gh-pages","master","master /docs"} [source]  Update the source for the repository. Must include the branch name, and may optionally specify the subdirectory `/docs`. Possible values are `"gh-pages"`, `"master"`, and `"master /docs"`.
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateInformationAboutPagesSite({owner, repo, cname, source})
 * @apiExample {js} Promise
 * octokit.repos.updateInformationAboutPagesSite({owner, repo, cname, source}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/pages/builds requestPageBuild
 * @apiName requestPageBuild
 * @apiDescription You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.

Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.

<a href="https://developer.github.com/v3/repos/pages/#request-a-page-build">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.requestPageBuild({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.requestPageBuild({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pages/builds listPagesBuilds
 * @apiName listPagesBuilds
 * @apiDescription <a href="https://developer.github.com/v3/repos/pages/#list-pages-builds">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listPagesBuilds({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listPagesBuilds({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pages/builds/latest getLatestPagesBuild
 * @apiName getLatestPagesBuild
 * @apiDescription <a href="https://developer.github.com/v3/repos/pages/#get-latest-pages-build">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getLatestPagesBuild({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getLatestPagesBuild({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/pages/builds/:build_id getPagesBuild
 * @apiName getPagesBuild
 * @apiDescription <a href="https://developer.github.com/v3/repos/pages/#get-a-specific-pages-build">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} build_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getPagesBuild({owner, repo, build_id})
 * @apiExample {js} Promise
 * octokit.repos.getPagesBuild({owner, repo, build_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/releases listReleases
 * @apiName listReleases
 * @apiDescription This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://developer.github.com/v3/repos/#list-tags).

Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.

<a href="https://developer.github.com/v3/repos/releases/#list-releases-for-a-repository">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listReleases({owner, repo, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listReleases({owner, repo, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/releases/:release_id getRelease
 * @apiName getRelease
 * @apiDescription **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://developer.github.com/v3/#hypermedia).

<a href="https://developer.github.com/v3/repos/releases/#get-a-single-release">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} release_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getRelease({owner, repo, release_id})
 * @apiExample {js} Promise
 * octokit.repos.getRelease({owner, repo, release_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/releases/latest getLatestRelease
 * @apiName getLatestRelease
 * @apiDescription View the latest published full release for the repository.

The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.

<a href="https://developer.github.com/v3/repos/releases/#get-the-latest-release">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getLatestRelease({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getLatestRelease({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/releases/tags/:tag getReleaseByTag
 * @apiName getReleaseByTag
 * @apiDescription Get a published release with the specified tag.

<a href="https://developer.github.com/v3/repos/releases/#get-a-release-by-tag-name">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} tag  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getReleaseByTag({owner, repo, tag})
 * @apiExample {js} Promise
 * octokit.repos.getReleaseByTag({owner, repo, tag}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/releases createRelease
 * @apiName createRelease
 * @apiDescription Users with push access to the repository can create a release.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

<a href="https://developer.github.com/v3/repos/releases/#create-a-release">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} tag_name  The name of the tag.
 * @apiParam {string} [target_commitish="the repository's default branch (usually `master`):"]  Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists.
 * @apiParam {string} [name]  The name of the release.
 * @apiParam {string} [body]  Text describing the contents of the tag.
 * @apiParam {boolean} [draft="false"]  `true` to create a draft (unpublished) release, `false` to create a published one.
 * @apiParam {boolean} [prerelease="false"]  `true` to identify the release as a prerelease. `false` to identify the release as a full release.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createRelease({owner, repo, tag_name, target_commitish, name, body, draft, prerelease})
 * @apiExample {js} Promise
 * octokit.repos.createRelease({owner, repo, tag_name, target_commitish, name, body, draft, prerelease}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/releases/:release_id updateRelease
 * @apiName updateRelease
 * @apiDescription Users with push access to the repository can edit a release.

<a href="https://developer.github.com/v3/repos/releases/#edit-a-release">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} release_id  
 * @apiParam {string} [tag_name]  The name of the tag.
 * @apiParam {string} [target_commitish="the repository's default branch (usually `master`):"]  Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists.
 * @apiParam {string} [name]  The name of the release.
 * @apiParam {string} [body]  Text describing the contents of the tag.
 * @apiParam {boolean} [draft]  `true` makes the release a draft, and `false` publishes the release.
 * @apiParam {boolean} [prerelease]  `true` to identify the release as a prerelease, `false` to identify the release as a full release.
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateRelease({owner, repo, release_id, tag_name, target_commitish, name, body, draft, prerelease})
 * @apiExample {js} Promise
 * octokit.repos.updateRelease({owner, repo, release_id, tag_name, target_commitish, name, body, draft, prerelease}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/releases/:release_id deleteRelease
 * @apiName deleteRelease
 * @apiDescription Users with push access to the repository can delete a release.

<a href="https://developer.github.com/v3/repos/releases/#delete-a-release">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} release_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteRelease({owner, repo, release_id})
 * @apiExample {js} Promise
 * octokit.repos.deleteRelease({owner, repo, release_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/releases/:release_id/assets listAssetsForRelease
 * @apiName listAssetsForRelease
 * @apiDescription <a href="https://developer.github.com/v3/repos/releases/#list-assets-for-a-release">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} release_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listAssetsForRelease({owner, repo, release_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listAssetsForRelease({owner, repo, release_id, per_page, page}).then(result => {})
 */


/**
 * @api {POST} :url uploadReleaseAsset
 * @apiName uploadReleaseAsset
 * @apiDescription This endpoint makes use of [a Hypermedia relation](https://developer.github.com/v3/#hypermedia) to determine which URL to access. This endpoint is provided by a URI template in [the release's API response](#get-a-single-release). You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

The asset data is expected in its raw binary form, rather than JSON. Everything else about the endpoint is the same as the rest of the API. For example, you'll still need to pass your authentication to be able to upload an asset.

Send the raw binary content of the asset as the request body.

This may leave an empty asset with a state of `"new"`. It can be safely deleted.

<a href="https://developer.github.com/v3/repos/releases/#upload-a-release-asset">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {integer} headers:content-length  The content size of the asset in bytes
 * @apiParam {string} headers:content-type  The content type of the asset. This should be set in the Header. Example: `"application/zip"`. For a list of acceptable types, refer this list of [media types](https://www.iana.org/assignments/media-types/media-types.xhtml).
 * @apiParam {object} headers  Request headers containing `content-type` and `content-length`
 * @apiParam {string} url  
 * @apiParam {string} name  The file name of the asset. This should be set in a URI query parameter.
 * @apiParam {string} [label]  An alternate short description of the asset. Used in place of the filename. This should be set in a URI query parameter.
 * @apiParam {object} file  
 * @apiExample {js} async/await
 * const result = await octokit.repos.uploadReleaseAsset({headers.content-length, headers.content-type, headers, url, name, label, file})
 * @apiExample {js} Promise
 * octokit.repos.uploadReleaseAsset({headers.content-length, headers.content-type, headers, url, name, label, file}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/releases/assets/:asset_id getReleaseAsset
 * @apiName getReleaseAsset
 * @apiDescription To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://developer.github.com/v3/media/#media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.

<a href="https://developer.github.com/v3/repos/releases/#get-a-single-release-asset">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} asset_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getReleaseAsset({owner, repo, asset_id})
 * @apiExample {js} Promise
 * octokit.repos.getReleaseAsset({owner, repo, asset_id}).then(result => {})
 */


/**
 * @api {PATCH} /repos/:owner/:repo/releases/assets/:asset_id updateReleaseAsset
 * @apiName updateReleaseAsset
 * @apiDescription Users with push access to the repository can edit a release asset.

<a href="https://developer.github.com/v3/repos/releases/#edit-a-release-asset">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} asset_id  
 * @apiParam {string} [name]  The file name of the asset.
 * @apiParam {string} [label]  An alternate short description of the asset. Used in place of the filename.
 * @apiExample {js} async/await
 * const result = await octokit.repos.updateReleaseAsset({owner, repo, asset_id, name, label})
 * @apiExample {js} Promise
 * octokit.repos.updateReleaseAsset({owner, repo, asset_id, name, label}).then(result => {})
 */


/**
 * @api {DELETE} /repos/:owner/:repo/releases/assets/:asset_id deleteReleaseAsset
 * @apiName deleteReleaseAsset
 * @apiDescription <a href="https://developer.github.com/v3/repos/releases/#delete-a-release-asset">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {integer} asset_id  
 * @apiExample {js} async/await
 * const result = await octokit.repos.deleteReleaseAsset({owner, repo, asset_id})
 * @apiExample {js} Promise
 * octokit.repos.deleteReleaseAsset({owner, repo, asset_id}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/stats/contributors getContributorsStats
 * @apiName getContributorsStats
 * @apiDescription *   `total` - The Total number of commits authored by the contributor.

Weekly Hash (`weeks` array):

*   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
*   `a` - Number of additions
*   `d` - Number of deletions
*   `c` - Number of commits



<a href="https://developer.github.com/v3/repos/statistics/#get-contributors-list-with-additions-deletions-and-commit-counts">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getContributorsStats({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getContributorsStats({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/stats/commit_activity getCommitActivityStats
 * @apiName getCommitActivityStats
 * @apiDescription Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.



<a href="https://developer.github.com/v3/repos/statistics/#get-the-last-year-of-commit-activity-data">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCommitActivityStats({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getCommitActivityStats({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/stats/code_frequency getCodeFrequencyStats
 * @apiName getCodeFrequencyStats
 * @apiDescription Returns a weekly aggregate of the number of additions and deletions pushed to a repository.



<a href="https://developer.github.com/v3/repos/statistics/#get-the-number-of-additions-and-deletions-per-week">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCodeFrequencyStats({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getCodeFrequencyStats({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/stats/participation getParticipationStats
 * @apiName getParticipationStats
 * @apiDescription Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.

The array order is oldest week (index 0) to most recent week.



<a href="https://developer.github.com/v3/repos/statistics/#get-the-weekly-commit-count-for-the-repository-owner-and-everyone-else">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getParticipationStats({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getParticipationStats({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/stats/punch_card getPunchCardStats
 * @apiName getPunchCardStats
 * @apiDescription Each array contains the day number, hour number, and number of commits:

*   `0-6`: Sunday - Saturday
*   `0-23`: Hour of day
*   Number of commits

For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.

<a href="https://developer.github.com/v3/repos/statistics/#get-the-number-of-commits-per-hour-in-each-day">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getPunchCardStats({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getPunchCardStats({owner, repo}).then(result => {})
 */


/**
 * @api {POST} /repos/:owner/:repo/statuses/:sha createStatus
 * @apiName createStatus
 * @apiDescription Users with push access in a repository can create commit statuses for a given SHA.

Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.

<a href="https://developer.github.com/v3/repos/statuses/#create-a-status">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} sha  
 * @apiParam {string=error,failure,pending,success} state  The state of the status. Can be one of `error`, `failure`, `pending`, or `success`.
 * @apiParam {string} [target_url]  The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.  
For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:  
`http://ci.example.com/user/repo/build/sha`
 * @apiParam {string} [description]  A short description of the status.
 * @apiParam {string} [context="default"]  A string label to differentiate this status from the status of other systems.
 * @apiExample {js} async/await
 * const result = await octokit.repos.createStatus({owner, repo, sha, state, target_url, description, context})
 * @apiExample {js} Promise
 * octokit.repos.createStatus({owner, repo, sha, state, target_url, description, context}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits/:ref/statuses listStatusesForRef
 * @apiName listStatusesForRef
 * @apiDescription Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.

This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.

<a href="https://developer.github.com/v3/repos/statuses/#list-statuses-for-a-specific-ref">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.repos.listStatusesForRef({owner, repo, ref, per_page, page})
 * @apiExample {js} Promise
 * octokit.repos.listStatusesForRef({owner, repo, ref, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/commits/:ref/status getCombinedStatusForRef
 * @apiName getCombinedStatusForRef
 * @apiDescription Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.

The most recent status for each context is returned, up to 100. This field [paginates](https://developer.github.com/v3/#pagination) if there are over 100 contexts.

Additionally, a combined `state` is returned. The `state` is one of:

*   **failure** if any of the contexts report as `error` or `failure`
*   **pending** if there are no statuses or a context is `pending`
*   **success** if the latest status for all contexts is `success`

<a href="https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string} ref  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getCombinedStatusForRef({owner, repo, ref})
 * @apiExample {js} Promise
 * octokit.repos.getCombinedStatusForRef({owner, repo, ref}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/traffic/popular/referrers getTopReferrers
 * @apiName getTopReferrers
 * @apiDescription Get the top 10 referrers over the last 14 days.

<a href="https://developer.github.com/v3/repos/traffic/#list-referrers">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getTopReferrers({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getTopReferrers({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/traffic/popular/paths getTopPaths
 * @apiName getTopPaths
 * @apiDescription Get the top 10 popular contents over the last 14 days.

<a href="https://developer.github.com/v3/repos/traffic/#list-paths">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.repos.getTopPaths({owner, repo})
 * @apiExample {js} Promise
 * octokit.repos.getTopPaths({owner, repo}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/traffic/views getViews
 * @apiName getViews
 * @apiDescription Get the total number of views and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.

<a href="https://developer.github.com/v3/repos/traffic/#views">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=day,week} [per="day"]  Must be one of: `day`, `week`.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getViews({owner, repo, per})
 * @apiExample {js} Promise
 * octokit.repos.getViews({owner, repo, per}).then(result => {})
 */


/**
 * @api {GET} /repos/:owner/:repo/traffic/clones getClones
 * @apiName getClones
 * @apiDescription Get the total number of clones and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.

<a href="https://developer.github.com/v3/repos/traffic/#clones">REST API doc</a>
 * @apiGroup Repos
 *
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=day,week} [per="day"]  Must be one of: `day`, `week`.
 * @apiExample {js} async/await
 * const result = await octokit.repos.getClones({owner, repo, per})
 * @apiExample {js} Promise
 * octokit.repos.getClones({owner, repo, per}).then(result => {})
 */



/**,
 * Search
 * @namespace Search
 */


/**
 * @api {GET} /search/repositories repos
 * @apiName repos
 * @apiDescription Find repositories via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](#text-match-metadata).

Suppose you want to search for popular Tetris repositories written in Assembly. Your query might look like this.

You can search for multiple topics by adding more `topic:` instances, and including the `mercy-preview` header. For example:

In this request, we're searching for repositories with the word `tetris` in the name, the description, or the README. We're limiting the results to only find repositories where the primary language is Assembly. We're sorting by stars in descending order, so that the most popular repositories appear first in the search results.

<a href="https://developer.github.com/v3/search/#search-repositories">REST API doc</a>
 * @apiGroup Search
 *
 * @apiParam {string} q  The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](#constructing-a-search-query). See "[Searching for repositories](https://help.github.com/articles/searching-for-repositories/)" for a detailed list of qualifiers.
 * @apiParam {string=stars,forks,help-wanted-issues,updated} [sort="[best match](#ranking-search-results)"]  Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`.
 * @apiParam {string=desc,asc} [order="desc"]  Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.search.repos({q, sort, order, per_page, page})
 * @apiExample {js} Promise
 * octokit.search.repos({q, sort, order, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /search/commits commits
 * @apiName commits
 * @apiDescription Find commits via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](#text-match-metadata).

**Considerations for commit search**

Only the _default branch_ is considered. In most cases, this will be the `master` branch.

Suppose you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:

<a href="https://developer.github.com/v3/search/#search-commits">REST API doc</a>
 * @apiGroup Search
 *
 * @apiParam {string} q  The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](#constructing-a-search-query). See "[Searching commits](https://help.github.com/articles/searching-commits/)" for a detailed list of qualifiers.
 * @apiParam {string=author-date,committer-date} [sort="[best match](#ranking-search-results)"]  Sorts the results of your query by `author-date` or `committer-date`.
 * @apiParam {string=desc,asc} [order="desc"]  Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.search.commits({q, sort, order, per_page, page})
 * @apiExample {js} Promise
 * octokit.search.commits({q, sort, order, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /search/code code
 * @apiName code
 * @apiDescription Find file contents via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](#text-match-metadata).

**Note:** You must [authenticate](https://developer.github.com/v3/#authentication) to search for code across all public repositories.

**Considerations for code search**

Due to the complexity of searching code, there are a few restrictions on how searches are performed:

*   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
*   Only files smaller than 384 KB are searchable.
*   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.

Suppose you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery). Your query would look something like this:

Here, we're searching for the keyword `addClass` within a file's contents. We're making sure that we're only looking in files where the language is JavaScript. And we're scoping the search to the `repo:jquery/jquery` repository.

<a href="https://developer.github.com/v3/search/#search-code">REST API doc</a>
 * @apiGroup Search
 *
 * @apiParam {string} q  The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](#constructing-a-search-query). See "[Searching code](https://help.github.com/articles/searching-code/)" for a detailed list of qualifiers.
 * @apiParam {string=indexed} [sort="[best match](#ranking-search-results)"]  Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub search infrastructure.
 * @apiParam {string=desc,asc} [order="desc"]  Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.search.code({q, sort, order, per_page, page})
 * @apiExample {js} Promise
 * octokit.search.code({q, sort, order, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /search/issues issuesAndPullRequests
 * @apiName issuesAndPullRequests
 * @apiDescription Find issues by state and keyword. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](#text-match-metadata).

Let's say you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.

In this query, we're searching for the keyword `windows`, within any open issue that's labeled as `bug`. The search runs across repositories whose primary language is Python. We’re sorting by creation date in ascending order, so that the oldest issues appear first in the search results.

<a href="https://developer.github.com/v3/search/#search-issues-and-pull-requests">REST API doc</a>
 * @apiGroup Search
 *
 * @apiParam {string} q  The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](#constructing-a-search-query). See "[Searching issues and pull requests](https://help.github.com/articles/searching-issues-and-pull-requests/)" for a detailed list of qualifiers.
 * @apiParam {string=comments,reactions,reactions-+1,reactions--1,reactions-smile,reactions-thinking_face,reactions-heart,reactions-tada,interactions,created,updated} [sort="[best match](#ranking-search-results)"]  Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`,
 * @apiParam {string=desc,asc} [order="desc"]  Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.search.issuesAndPullRequests({q, sort, order, per_page, page})
 * @apiExample {js} Promise
 * octokit.search.issuesAndPullRequests({q, sort, order, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /search/issues issues
 * @apiName issues
 * @apiDescription Find issues by state and keyword. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](#text-match-metadata).

Let's say you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.

In this query, we're searching for the keyword `windows`, within any open issue that's labeled as `bug`. The search runs across repositories whose primary language is Python. We’re sorting by creation date in ascending order, so that the oldest issues appear first in the search results.

<a href="https://developer.github.com/v3/search/#search-issues-and-pull-requests">REST API doc</a>
 * @apiGroup Search
 *
 * @apiParam {string} q  The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](#constructing-a-search-query). See "[Searching issues and pull requests](https://help.github.com/articles/searching-issues-and-pull-requests/)" for a detailed list of qualifiers.
 * @apiParam {string=comments,reactions,reactions-+1,reactions--1,reactions-smile,reactions-thinking_face,reactions-heart,reactions-tada,interactions,created,updated} [sort="[best match](#ranking-search-results)"]  Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`,
 * @apiParam {string=desc,asc} [order="desc"]  Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiDeprecated octokit.search.issues() has been renamed to octokit.search.issuesAndPullRequests() (2018-12-27)
 * @apiExample {js} async/await
 * const result = await octokit.search.issues({q, sort, order, per_page, page})
 * @apiExample {js} Promise
 * octokit.search.issues({q, sort, order, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /search/users users
 * @apiName users
 * @apiDescription Find users via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for users, you can get text match metadata for the issue **login**, **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](#text-match-metadata).

Imagine you're looking for a list of popular users. You might try out this query:

Here, we're looking at users with the name Tom. We're only interested in those with more than 42 repositories, and only if they have over 1,000 followers.

<a href="https://developer.github.com/v3/search/#search-users">REST API doc</a>
 * @apiGroup Search
 *
 * @apiParam {string} q  The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](#constructing-a-search-query). See "[Searching users](https://help.github.com/articles/searching-users/)" for a detailed list of qualifiers.
 * @apiParam {string=followers,repositories,joined} [sort="[best match](#ranking-search-results)"]  Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub.
 * @apiParam {string=desc,asc} [order="desc"]  Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.search.users({q, sort, order, per_page, page})
 * @apiExample {js} Promise
 * octokit.search.users({q, sort, order, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /search/topics topics
 * @apiName topics
 * @apiDescription Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](#text-match-metadata).

See "[Searching topics](https://help.github.com/articles/searching-topics/)" for a detailed list of qualifiers.

Suppose you want to search for topics related to Ruby that are featured on [https://github.com/topics](https://github.com/topics). Your query might look like this:

In this request, we're searching for topics with the keyword `ruby`, and we're limiting the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.

**Note:** A search for featured Ruby topics only has 6 total results, so a [Link header](https://developer.github.com/v3/#link-header) indicating pagination is not included in the response.

<a href="https://developer.github.com/v3/search/#search-topics">REST API doc</a>
 * @apiGroup Search
 *
 * @apiParam {string} q  The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](#constructing-a-search-query).
 * @apiExample {js} async/await
 * const result = await octokit.search.topics({q})
 * @apiExample {js} Promise
 * octokit.search.topics({q}).then(result => {})
 */


/**
 * @api {GET} /search/labels labels
 * @apiName labels
 * @apiDescription Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](#text-match-metadata).

Suppose you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:

The labels that best match for the query appear first in the search results.

<a href="https://developer.github.com/v3/search/#search-labels">REST API doc</a>
 * @apiGroup Search
 *
 * @apiParam {integer} repository_id  The id of the repository.
 * @apiParam {string} q  The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](#constructing-a-search-query).
 * @apiParam {string=created,updated} [sort="[best match](#ranking-search-results)"]  Sorts the results of your query by when the label was `created` or `updated`.
 * @apiParam {string=desc,asc} [order="desc"]  Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
 * @apiExample {js} async/await
 * const result = await octokit.search.labels({repository_id, q, sort, order})
 * @apiExample {js} Promise
 * octokit.search.labels({repository_id, q, sort, order}).then(result => {})
 */



/**,
 * Teams
 * @namespace Teams
 */


/**
 * @api {GET} /orgs/:org/teams list
 * @apiName list
 * @apiDescription <a href="https://developer.github.com/v3/teams/#list-teams">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {string} org  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.teams.list({org, per_page, page})
 * @apiExample {js} Promise
 * octokit.teams.list({org, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id get
 * @apiName get
 * @apiDescription <a href="https://developer.github.com/v3/teams/#get-team">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiExample {js} async/await
 * const result = await octokit.teams.get({team_id})
 * @apiExample {js} Promise
 * octokit.teams.get({team_id}).then(result => {})
 */


/**
 * @api {POST} /orgs/:org/teams create
 * @apiName create
 * @apiDescription To create a team, the authenticated user must be a member of `:org`.

<a href="https://developer.github.com/v3/teams/#create-team">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {string} org  
 * @apiParam {string} name  The name of the team.
 * @apiParam {string} [description]  The description of the team.
 * @apiParam {string[]} [maintainers]  The logins of organization members to add as maintainers of the team.
 * @apiParam {string[]} [repo_names]  The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
 * @apiParam {string=secret,closed} [privacy="secret"]  The level of privacy this team should have. The options are:  
**For a non-nested team:**  
\* `secret` - only visible to organization owners and members of this team.  
\* `closed` - visible to all members of this organization.  
Default: `secret`  
**For a parent or child team:**  
\* `closed` - visible to all members of this organization.  
Default for child team: `closed`  
**Note**: You must pass the `hellcat-preview` media type to set privacy default to `closed` for child teams. **For a parent or child team:**  
 * @apiParam {string=pull,push,admin} [permission="pull"]  **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:  
\* `pull` - team members can pull, but not push to or administer newly-added repositories.  
\* `push` - team members can pull and push, but not administer newly-added repositories.  
\* `admin` - team members can pull, push and administer newly-added repositories.
 * @apiParam {integer} [parent_team_id]  The ID of a team to set as the parent team. **Note**: You must pass the `hellcat-preview` media type to use this parameter.
 * @apiExample {js} async/await
 * const result = await octokit.teams.create({org, name, description, maintainers, repo_names, privacy, permission, parent_team_id})
 * @apiExample {js} Promise
 * octokit.teams.create({org, name, description, maintainers, repo_names, privacy, permission, parent_team_id}).then(result => {})
 */


/**
 * @api {PATCH} /teams/:team_id update
 * @apiName update
 * @apiDescription To edit a team, the authenticated user must either be an owner of the org that the team is associated with, or a maintainer of the team.

**Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.

<a href="https://developer.github.com/v3/teams/#edit-team">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string} name  The name of the team.
 * @apiParam {string} [description]  The description of the team.
 * @apiParam {string} [privacy]  The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:  
**For a non-nested team:**  
\* `secret` - only visible to organization owners and members of this team.  
\* `closed` - visible to all members of this organization.  
**For a parent or child team:**  
\* `closed` - visible to all members of this organization.
 * @apiParam {string=pull,push,admin} [permission="pull"]  **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:  
\* `pull` - team members can pull, but not push to or administer newly-added repositories.  
\* `push` - team members can pull and push, but not administer newly-added repositories.  
\* `admin` - team members can pull, push and administer newly-added repositories.
 * @apiParam {integer} [parent_team_id]  The ID of a team to set as the parent team. **Note**: You must pass the `hellcat-preview` media type to use this parameter.
 * @apiExample {js} async/await
 * const result = await octokit.teams.update({team_id, name, description, privacy, permission, parent_team_id})
 * @apiExample {js} Promise
 * octokit.teams.update({team_id, name, description, privacy, permission, parent_team_id}).then(result => {})
 */


/**
 * @api {DELETE} /teams/:team_id delete
 * @apiName delete
 * @apiDescription To delete a team, the authenticated user must be a team maintainer or an owner of the org associated with the team.

If you are an organization owner and you pass the `hellcat-preview` media type, deleting a parent team will delete all of its child teams as well.

<a href="https://developer.github.com/v3/teams/#delete-team">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiExample {js} async/await
 * const result = await octokit.teams.delete({team_id})
 * @apiExample {js} Promise
 * octokit.teams.delete({team_id}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/teams listChild
 * @apiName listChild
 * @apiDescription At this time, the `hellcat-preview` media type is required to use this endpoint.



<a href="https://developer.github.com/v3/teams/#list-child-teams">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.teams.listChild({team_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.teams.listChild({team_id, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/repos listRepos
 * @apiName listRepos
 * @apiDescription **Note**: If you pass the `hellcat-preview` media type, the response will include any repositories inherited through a parent team.

<a href="https://developer.github.com/v3/teams/#list-team-repos">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.teams.listRepos({team_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.teams.listRepos({team_id, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/repos/:owner/:repo checkManagesRepo
 * @apiName checkManagesRepo
 * @apiDescription **Note**: If you pass the `hellcat-preview` media type, repositories inherited through a parent team will be checked.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:

<a href="https://developer.github.com/v3/teams/#check-if-a-team-manages-a-repository">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.teams.checkManagesRepo({team_id, owner, repo})
 * @apiExample {js} Promise
 * octokit.teams.checkManagesRepo({team_id, owner, repo}).then(result => {})
 */


/**
 * @api {PUT} /teams/:team_id/repos/:owner/:repo addOrUpdateRepo
 * @apiName addOrUpdateRepo
 * @apiDescription To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.

If you pass the `hellcat-preview` media type, you can modify repository permissions of child teams.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

<a href="https://developer.github.com/v3/teams/#add-or-update-team-repository">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiParam {string=pull,push,admin} [permission]  The permission to grant the team on this repository. Can be one of:  
\* `pull` - team members can pull, but not push to or administer this repository.  
\* `push` - team members can pull and push, but not administer this repository.  
\* `admin` - team members can pull, push and administer this repository.  
  
If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.  
**Note**: If you pass the `hellcat-preview` media type, you can promote—but not demote—a `permission` attribute inherited through a parent team.
 * @apiExample {js} async/await
 * const result = await octokit.teams.addOrUpdateRepo({team_id, owner, repo, permission})
 * @apiExample {js} Promise
 * octokit.teams.addOrUpdateRepo({team_id, owner, repo, permission}).then(result => {})
 */


/**
 * @api {DELETE} /teams/:team_id/repos/:owner/:repo removeRepo
 * @apiName removeRepo
 * @apiDescription If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.

<a href="https://developer.github.com/v3/teams/#remove-team-repository">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string} owner  
 * @apiParam {string} repo  
 * @apiExample {js} async/await
 * const result = await octokit.teams.removeRepo({team_id, owner, repo})
 * @apiExample {js} Promise
 * octokit.teams.removeRepo({team_id, owner, repo}).then(result => {})
 */


/**
 * @api {GET} /user/teams listForAuthenticatedUser
 * @apiName listForAuthenticatedUser
 * @apiDescription List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://developer.github.com/apps/building-oauth-apps/).

<a href="https://developer.github.com/v3/teams/#list-user-teams">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.teams.listForAuthenticatedUser({per_page, page})
 * @apiExample {js} Promise
 * octokit.teams.listForAuthenticatedUser({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/projects listProjects
 * @apiName listProjects
 * @apiDescription Lists the organization projects for a team. If you pass the `hellcat-preview` media type, the response will include projects inherited from a parent team.

<a href="https://developer.github.com/v3/teams/#list-team-projects">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.teams.listProjects({team_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.teams.listProjects({team_id, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/projects/:project_id reviewProject
 * @apiName reviewProject
 * @apiDescription Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. If you pass the `hellcat-preview` media type, the response will include projects inherited from a parent team.

<a href="https://developer.github.com/v3/teams/#review-a-team-project">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} project_id  
 * @apiExample {js} async/await
 * const result = await octokit.teams.reviewProject({team_id, project_id})
 * @apiExample {js} Promise
 * octokit.teams.reviewProject({team_id, project_id}).then(result => {})
 */


/**
 * @api {PUT} /teams/:team_id/projects/:project_id addOrUpdateProject
 * @apiName addOrUpdateProject
 * @apiDescription Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

<a href="https://developer.github.com/v3/teams/#add-or-update-team-project">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} project_id  
 * @apiParam {string=read,write,admin} [permission]  The permission to grant to the team for this project. Can be one of:  
\* `read` - team members can read, but not write to or administer this project.  
\* `write` - team members can read and write, but not administer this project.  
\* `admin` - team members can read, write and administer this project.  
Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."  
**Note**: If you pass the `hellcat-preview` media type, you can promote—but not demote—a `permission` attribute inherited from a parent team.
 * @apiExample {js} async/await
 * const result = await octokit.teams.addOrUpdateProject({team_id, project_id, permission})
 * @apiExample {js} Promise
 * octokit.teams.addOrUpdateProject({team_id, project_id, permission}).then(result => {})
 */


/**
 * @api {DELETE} /teams/:team_id/projects/:project_id removeProject
 * @apiName removeProject
 * @apiDescription Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.

<a href="https://developer.github.com/v3/teams/#remove-team-project">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} project_id  
 * @apiExample {js} async/await
 * const result = await octokit.teams.removeProject({team_id, project_id})
 * @apiExample {js} Promise
 * octokit.teams.removeProject({team_id, project_id}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/discussions/:discussion_number/comments listDiscussionComments
 * @apiName listDiscussionComments
 * @apiDescription List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/teams/discussion_comments/#list-comments">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} discussion_number  
 * @apiParam {string=asc,desc} [direction="desc"]  Sorts the discussion comments by the date they were created. To return the oldest comments first, set to `asc`. Can be one of `asc` or `desc`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.teams.listDiscussionComments({team_id, discussion_number, direction, per_page, page})
 * @apiExample {js} Promise
 * octokit.teams.listDiscussionComments({team_id, discussion_number, direction, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/discussions/:discussion_number/comments/:comment_number getDiscussionComment
 * @apiName getDiscussionComment
 * @apiDescription Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/teams/discussion_comments/#get-a-single-comment">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} discussion_number  
 * @apiParam {integer} comment_number  
 * @apiExample {js} async/await
 * const result = await octokit.teams.getDiscussionComment({team_id, discussion_number, comment_number})
 * @apiExample {js} Promise
 * octokit.teams.getDiscussionComment({team_id, discussion_number, comment_number}).then(result => {})
 */


/**
 * @api {POST} /teams/:team_id/discussions/:discussion_number/comments createDiscussionComment
 * @apiName createDiscussionComment
 * @apiDescription Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

<a href="https://developer.github.com/v3/teams/discussion_comments/#create-a-comment">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} discussion_number  
 * @apiParam {string} body  The discussion comment's body text.
 * @apiExample {js} async/await
 * const result = await octokit.teams.createDiscussionComment({team_id, discussion_number, body})
 * @apiExample {js} Promise
 * octokit.teams.createDiscussionComment({team_id, discussion_number, body}).then(result => {})
 */


/**
 * @api {PATCH} /teams/:team_id/discussions/:discussion_number/comments/:comment_number updateDiscussionComment
 * @apiName updateDiscussionComment
 * @apiDescription Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/teams/discussion_comments/#edit-a-comment">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} discussion_number  
 * @apiParam {integer} comment_number  
 * @apiParam {string} body  The discussion comment's body text.
 * @apiExample {js} async/await
 * const result = await octokit.teams.updateDiscussionComment({team_id, discussion_number, comment_number, body})
 * @apiExample {js} Promise
 * octokit.teams.updateDiscussionComment({team_id, discussion_number, comment_number, body}).then(result => {})
 */


/**
 * @api {DELETE} /teams/:team_id/discussions/:discussion_number/comments/:comment_number deleteDiscussionComment
 * @apiName deleteDiscussionComment
 * @apiDescription Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/teams/discussion_comments/#delete-a-comment">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} discussion_number  
 * @apiParam {integer} comment_number  
 * @apiExample {js} async/await
 * const result = await octokit.teams.deleteDiscussionComment({team_id, discussion_number, comment_number})
 * @apiExample {js} Promise
 * octokit.teams.deleteDiscussionComment({team_id, discussion_number, comment_number}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/discussions listDiscussions
 * @apiName listDiscussions
 * @apiDescription List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/teams/discussions/#list-discussions">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string=asc,desc} [direction="desc"]  Sorts the discussion comments by the date they were created. To return the oldest comments first, set to `asc`. Can be one of `asc` or `desc`.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.teams.listDiscussions({team_id, direction, per_page, page})
 * @apiExample {js} Promise
 * octokit.teams.listDiscussions({team_id, direction, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/discussions/:discussion_number getDiscussion
 * @apiName getDiscussion
 * @apiDescription Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/teams/discussions/#get-a-single-discussion">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} discussion_number  
 * @apiExample {js} async/await
 * const result = await octokit.teams.getDiscussion({team_id, discussion_number})
 * @apiExample {js} Promise
 * octokit.teams.getDiscussion({team_id, discussion_number}).then(result => {})
 */


/**
 * @api {POST} /teams/:team_id/discussions createDiscussion
 * @apiName createDiscussion
 * @apiDescription Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

<a href="https://developer.github.com/v3/teams/discussions/#create-a-discussion">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string} title  The discussion post's title.
 * @apiParam {string} body  The discussion post's body text.
 * @apiParam {boolean} [private="false"]  Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
 * @apiExample {js} async/await
 * const result = await octokit.teams.createDiscussion({team_id, title, body, private})
 * @apiExample {js} Promise
 * octokit.teams.createDiscussion({team_id, title, body, private}).then(result => {})
 */


/**
 * @api {PATCH} /teams/:team_id/discussions/:discussion_number updateDiscussion
 * @apiName updateDiscussion
 * @apiDescription Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/teams/discussions/#edit-a-discussion">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} discussion_number  
 * @apiParam {string} [title]  The discussion post's title.
 * @apiParam {string} [body]  The discussion post's body text.
 * @apiExample {js} async/await
 * const result = await octokit.teams.updateDiscussion({team_id, discussion_number, title, body})
 * @apiExample {js} Promise
 * octokit.teams.updateDiscussion({team_id, discussion_number, title, body}).then(result => {})
 */


/**
 * @api {DELETE} /teams/:team_id/discussions/:discussion_number deleteDiscussion
 * @apiName deleteDiscussion
 * @apiDescription Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/teams/discussions/#delete-a-discussion">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} discussion_number  
 * @apiExample {js} async/await
 * const result = await octokit.teams.deleteDiscussion({team_id, discussion_number})
 * @apiExample {js} Promise
 * octokit.teams.deleteDiscussion({team_id, discussion_number}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/members listMembers
 * @apiName listMembers
 * @apiDescription If you pass the `hellcat-preview` media type, team members will include the members of child teams.

<a href="https://developer.github.com/v3/teams/members/#list-team-members">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string=member,maintainer,all} [role="all"]  Filters members returned by their role in the team. Can be one of:  
\* `member` - normal members of the team.  
\* `maintainer` - team maintainers.  
\* `all` - all members of the team.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.teams.listMembers({team_id, role, per_page, page})
 * @apiExample {js} Promise
 * octokit.teams.listMembers({team_id, role, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/members/:username getMember
 * @apiName getMember
 * @apiDescription The "Get team member" API (described below) is deprecated.

We recommend using the [Get team membership API](https://developer.github.com/v3/teams/members/#get-team-membership) instead. It allows you to get both active and pending memberships.

To list members in a team, the team must be visible to the authenticated user.

<a href="https://developer.github.com/v3/teams/members/#get-team-member">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.teams.getMember({team_id, username})
 * @apiExample {js} Promise
 * octokit.teams.getMember({team_id, username}).then(result => {})
 */


/**
 * @api {PUT} /teams/:team_id/members/:username addMember
 * @apiName addMember
 * @apiDescription The "Add team member" API (described below) is deprecated.

We recommend using the [Add team membership API](https://developer.github.com/v3/teams/members/#add-or-update-team-membership) instead. It allows you to invite new organization members to your teams.

To add a user to a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with, and the user being added must already be a member of at least one other team on the same organization.

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

If you attempt to add an organization to a team, you will get this:

If you attempt to add a user to a team and that user is not a member of at least one other team on the same organization, you will get this:

<a href="https://developer.github.com/v3/teams/members/#add-team-member">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.teams.addMember({team_id, username})
 * @apiExample {js} Promise
 * octokit.teams.addMember({team_id, username}).then(result => {})
 */


/**
 * @api {DELETE} /teams/:team_id/members/:username removeMember
 * @apiName removeMember
 * @apiDescription The "Remove team member" API (described below) is deprecated.

We recommend using the [Remove team membership API](https://developer.github.com/v3/teams/members/#remove-team-membership) instead. It allows you to remove both active and pending memberships.

To remove a user from a team, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. NOTE: This does not delete the user, it just removes them from the team.

<a href="https://developer.github.com/v3/teams/members/#remove-team-member">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.teams.removeMember({team_id, username})
 * @apiExample {js} Promise
 * octokit.teams.removeMember({team_id, username}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/memberships/:username getMembership
 * @apiName getMembership
 * @apiDescription If you pass the `hellcat-preview` media type, team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create team](https://developer.github.com/v3/teams#create-team).

<a href="https://developer.github.com/v3/teams/members/#get-team-membership">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.teams.getMembership({team_id, username})
 * @apiExample {js} Promise
 * octokit.teams.getMembership({team_id, username}).then(result => {})
 */


/**
 * @api {PUT} /teams/:team_id/memberships/:username addOrUpdateMembership
 * @apiName addOrUpdateMembership
 * @apiDescription If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a maintainer of the team.

If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a maintainer of the team.

If you attempt to add an organization to a team, you will get this:

<a href="https://developer.github.com/v3/teams/members/#add-or-update-team-membership">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string} username  
 * @apiParam {string=member,maintainer} [role="member"]  The role that this user should have in the team. Can be one of:  
\* `member` - a normal member of the team.  
\* `maintainer` - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.
 * @apiExample {js} async/await
 * const result = await octokit.teams.addOrUpdateMembership({team_id, username, role})
 * @apiExample {js} Promise
 * octokit.teams.addOrUpdateMembership({team_id, username, role}).then(result => {})
 */


/**
 * @api {DELETE} /teams/:team_id/memberships/:username removeMembership
 * @apiName removeMembership
 * @apiDescription To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team.

<a href="https://developer.github.com/v3/teams/members/#remove-team-membership">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.teams.removeMembership({team_id, username})
 * @apiExample {js} Promise
 * octokit.teams.removeMembership({team_id, username}).then(result => {})
 */


/**
 * @api {GET} /teams/:team_id/invitations listPendingInvitations
 * @apiName listPendingInvitations
 * @apiDescription The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.

<a href="https://developer.github.com/v3/teams/members/#list-pending-team-invitations">REST API doc</a>
 * @apiGroup Teams
 *
 * @apiParam {integer} team_id  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.teams.listPendingInvitations({team_id, per_page, page})
 * @apiExample {js} Promise
 * octokit.teams.listPendingInvitations({team_id, per_page, page}).then(result => {})
 */



/**,
 * Users
 * @namespace Users
 */


/**
 * @api {GET} /users/:username getByUsername
 * @apiName getByUsername
 * @apiDescription Provides publicly available information about someone with a GitHub account.

The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://developer.github.com/v3/#authentication).

The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://developer.github.com/v3/users/emails/)".

<a href="https://developer.github.com/v3/users/#get-a-single-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.getByUsername({username})
 * @apiExample {js} Promise
 * octokit.users.getByUsername({username}).then(result => {})
 */


/**
 * @api {GET} /user getAuthenticated
 * @apiName getAuthenticated
 * @apiDescription Lists public and private profile information when authenticated through basic auth or OAuth with the `user` scope.

Lists public profile information when authenticated through OAuth without the `user` scope.

<a href="https://developer.github.com/v3/users/#get-the-authenticated-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiExample {js} async/await
 * const result = await octokit.users.getAuthenticated({})
 * @apiExample {js} Promise
 * octokit.users.getAuthenticated({}).then(result => {})
 */


/**
 * @api {PATCH} /user updateAuthenticated
 * @apiName updateAuthenticated
 * @apiDescription **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.

<a href="https://developer.github.com/v3/users/#update-the-authenticated-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} [name]  The new name of the user.
 * @apiParam {string} [email]  The publicly visible email address of the user.
 * @apiParam {string} [blog]  The new blog URL of the user.
 * @apiParam {string} [company]  The new company of the user.
 * @apiParam {string} [location]  The new location of the user.
 * @apiParam {boolean} [hireable]  The new hiring availability of the user.
 * @apiParam {string} [bio]  The new short biography of the user.
 * @apiExample {js} async/await
 * const result = await octokit.users.updateAuthenticated({name, email, blog, company, location, hireable, bio})
 * @apiExample {js} Promise
 * octokit.users.updateAuthenticated({name, email, blog, company, location, hireable, bio}).then(result => {})
 */


/**
 * @api {GET} /users/:username/hovercard getContextForUser
 * @apiName getContextForUser
 * @apiDescription Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.

The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:

<a href="https://developer.github.com/v3/users/#get-contextual-information-about-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiParam {string=organization,repository,issue,pull_request} [subject_type]  Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.
 * @apiParam {string} [subject_id]  Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`.
 * @apiExample {js} async/await
 * const result = await octokit.users.getContextForUser({username, subject_type, subject_id})
 * @apiExample {js} Promise
 * octokit.users.getContextForUser({username, subject_type, subject_id}).then(result => {})
 */


/**
 * @api {GET} /users list
 * @apiName list
 * @apiDescription Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of users.

<a href="https://developer.github.com/v3/users/#get-all-users">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} [since]  The integer ID of the last User that you've seen.
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.users.list({since, per_page, page})
 * @apiExample {js} Promise
 * octokit.users.list({since, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/blocks listBlocked
 * @apiName listBlocked
 * @apiDescription List the users you've blocked on your personal account.

<a href="https://developer.github.com/v3/users/blocking/#list-blocked-users">REST API doc</a>
 * @apiGroup Users
 *
 * @apiExample {js} async/await
 * const result = await octokit.users.listBlocked({})
 * @apiExample {js} Promise
 * octokit.users.listBlocked({}).then(result => {})
 */


/**
 * @api {GET} /user/blocks/:username checkBlocked
 * @apiName checkBlocked
 * @apiDescription If the user is blocked:

If the user is not blocked:

<a href="https://developer.github.com/v3/users/blocking/#check-whether-youve-blocked-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.checkBlocked({username})
 * @apiExample {js} Promise
 * octokit.users.checkBlocked({username}).then(result => {})
 */


/**
 * @api {PUT} /user/blocks/:username block
 * @apiName block
 * @apiDescription <a href="https://developer.github.com/v3/users/blocking/#block-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.block({username})
 * @apiExample {js} Promise
 * octokit.users.block({username}).then(result => {})
 */


/**
 * @api {DELETE} /user/blocks/:username unblock
 * @apiName unblock
 * @apiDescription <a href="https://developer.github.com/v3/users/blocking/#unblock-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.unblock({username})
 * @apiExample {js} Promise
 * octokit.users.unblock({username}).then(result => {})
 */


/**
 * @api {GET} /user/emails listEmails
 * @apiName listEmails
 * @apiDescription Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.

<a href="https://developer.github.com/v3/users/emails/#list-email-addresses-for-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.users.listEmails({per_page, page})
 * @apiExample {js} Promise
 * octokit.users.listEmails({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/public_emails listPublicEmails
 * @apiName listPublicEmails
 * @apiDescription Lists your publicly visible email address, which you can set with the [Toggle primary email visibility](#toggle-primary-email-visibility) endpoint. This endpoint is accessible with the `user:email` scope.

<a href="https://developer.github.com/v3/users/emails/#list-public-email-addresses-for-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.users.listPublicEmails({per_page, page})
 * @apiExample {js} Promise
 * octokit.users.listPublicEmails({per_page, page}).then(result => {})
 */


/**
 * @api {POST} /user/emails addEmails
 * @apiName addEmails
 * @apiDescription This endpoint is accessible with the `user` scope.

<a href="https://developer.github.com/v3/users/emails/#add-email-addresses">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string[]} emails  Adds one or more email addresses to your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.
 * @apiExample {js} async/await
 * const result = await octokit.users.addEmails({emails})
 * @apiExample {js} Promise
 * octokit.users.addEmails({emails}).then(result => {})
 */


/**
 * @api {DELETE} /user/emails deleteEmails
 * @apiName deleteEmails
 * @apiDescription This endpoint is accessible with the `user` scope.

<a href="https://developer.github.com/v3/users/emails/#delete-email-addresses">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string[]} emails  Deletes one or more email addresses from your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.
 * @apiExample {js} async/await
 * const result = await octokit.users.deleteEmails({emails})
 * @apiExample {js} Promise
 * octokit.users.deleteEmails({emails}).then(result => {})
 */


/**
 * @api {PATCH} /user/email/visibility togglePrimaryEmailVisibility
 * @apiName togglePrimaryEmailVisibility
 * @apiDescription Sets the visibility for your primary email addresses.

<a href="https://developer.github.com/v3/users/emails/#toggle-primary-email-visibility">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} email  Specify the _primary_ email address that needs a visibility change.
 * @apiParam {string} visibility  Use `public` to enable an authenticated user to view the specified email address, or use `private` so this primary email address cannot be seen publicly.
 * @apiExample {js} async/await
 * const result = await octokit.users.togglePrimaryEmailVisibility({email, visibility})
 * @apiExample {js} Promise
 * octokit.users.togglePrimaryEmailVisibility({email, visibility}).then(result => {})
 */


/**
 * @api {GET} /users/:username/followers listFollowersForUser
 * @apiName listFollowersForUser
 * @apiDescription <a href="https://developer.github.com/v3/users/followers/#list-followers-of-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.users.listFollowersForUser({username, per_page, page})
 * @apiExample {js} Promise
 * octokit.users.listFollowersForUser({username, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/followers listFollowersForAuthenticatedUser
 * @apiName listFollowersForAuthenticatedUser
 * @apiDescription <a href="https://developer.github.com/v3/users/followers/#list-followers-of-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.users.listFollowersForAuthenticatedUser({per_page, page})
 * @apiExample {js} Promise
 * octokit.users.listFollowersForAuthenticatedUser({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /users/:username/following listFollowingForUser
 * @apiName listFollowingForUser
 * @apiDescription <a href="https://developer.github.com/v3/users/followers/#list-users-followed-by-another-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.users.listFollowingForUser({username, per_page, page})
 * @apiExample {js} Promise
 * octokit.users.listFollowingForUser({username, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/following listFollowingForAuthenticatedUser
 * @apiName listFollowingForAuthenticatedUser
 * @apiDescription <a href="https://developer.github.com/v3/users/followers/#list-users-followed-by-another-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.users.listFollowingForAuthenticatedUser({per_page, page})
 * @apiExample {js} Promise
 * octokit.users.listFollowingForAuthenticatedUser({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/following/:username checkFollowing
 * @apiName checkFollowing
 * @apiDescription <a href="https://developer.github.com/v3/users/followers/#check-if-you-are-following-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.checkFollowing({username})
 * @apiExample {js} Promise
 * octokit.users.checkFollowing({username}).then(result => {})
 */


/**
 * @api {GET} /users/:username/following/:target_user checkFollowingForUser
 * @apiName checkFollowingForUser
 * @apiDescription <a href="https://developer.github.com/v3/users/followers/#check-if-one-user-follows-another">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiParam {string} target_user  
 * @apiExample {js} async/await
 * const result = await octokit.users.checkFollowingForUser({username, target_user})
 * @apiExample {js} Promise
 * octokit.users.checkFollowingForUser({username, target_user}).then(result => {})
 */


/**
 * @api {PUT} /user/following/:username follow
 * @apiName follow
 * @apiDescription Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

<a href="https://developer.github.com/v3/users/followers/#follow-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.follow({username})
 * @apiExample {js} Promise
 * octokit.users.follow({username}).then(result => {})
 */


/**
 * @api {DELETE} /user/following/:username unfollow
 * @apiName unfollow
 * @apiDescription Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

<a href="https://developer.github.com/v3/users/followers/#unfollow-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiExample {js} async/await
 * const result = await octokit.users.unfollow({username})
 * @apiExample {js} Promise
 * octokit.users.unfollow({username}).then(result => {})
 */


/**
 * @api {GET} /users/:username/gpg_keys listGpgKeysForUser
 * @apiName listGpgKeysForUser
 * @apiDescription Lists the GPG keys for a user. This information is accessible by anyone.

<a href="https://developer.github.com/v3/users/gpg_keys/#list-gpg-keys-for-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.users.listGpgKeysForUser({username, per_page, page})
 * @apiExample {js} Promise
 * octokit.users.listGpgKeysForUser({username, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/gpg_keys listGpgKeys
 * @apiName listGpgKeys
 * @apiDescription Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/users/gpg_keys/#list-your-gpg-keys">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.users.listGpgKeys({per_page, page})
 * @apiExample {js} Promise
 * octokit.users.listGpgKeys({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/gpg_keys/:gpg_key_id getGpgKey
 * @apiName getGpgKey
 * @apiDescription View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/users/gpg_keys/#get-a-single-gpg-key">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {integer} gpg_key_id  
 * @apiExample {js} async/await
 * const result = await octokit.users.getGpgKey({gpg_key_id})
 * @apiExample {js} Promise
 * octokit.users.getGpgKey({gpg_key_id}).then(result => {})
 */


/**
 * @api {POST} /user/gpg_keys createGpgKey
 * @apiName createGpgKey
 * @apiDescription Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/users/gpg_keys/#create-a-gpg-key">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} [armored_public_key]  Your GPG key, generated in ASCII-armored format. See "[Generating a new GPG key](https://help.github.com/articles/generating-a-new-gpg-key/)" for help creating a GPG key.
 * @apiExample {js} async/await
 * const result = await octokit.users.createGpgKey({armored_public_key})
 * @apiExample {js} Promise
 * octokit.users.createGpgKey({armored_public_key}).then(result => {})
 */


/**
 * @api {DELETE} /user/gpg_keys/:gpg_key_id deleteGpgKey
 * @apiName deleteGpgKey
 * @apiDescription Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/users/gpg_keys/#delete-a-gpg-key">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {integer} gpg_key_id  
 * @apiExample {js} async/await
 * const result = await octokit.users.deleteGpgKey({gpg_key_id})
 * @apiExample {js} Promise
 * octokit.users.deleteGpgKey({gpg_key_id}).then(result => {})
 */


/**
 * @api {GET} /users/:username/keys listPublicKeysForUser
 * @apiName listPublicKeysForUser
 * @apiDescription Lists the _verified_ public SSH keys for a user. This is accessible by anyone.

<a href="https://developer.github.com/v3/users/keys/#list-public-keys-for-a-user">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} username  
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.users.listPublicKeysForUser({username, per_page, page})
 * @apiExample {js} Promise
 * octokit.users.listPublicKeysForUser({username, per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/keys listPublicKeys
 * @apiName listPublicKeys
 * @apiDescription Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/users/keys/#list-your-public-keys">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {integer} [per_page="30"]  Results per page (max 100)
 * @apiParam {integer} [page="1"]  Page number of the results to fetch.
 * @apiExample {js} async/await
 * const result = await octokit.users.listPublicKeys({per_page, page})
 * @apiExample {js} Promise
 * octokit.users.listPublicKeys({per_page, page}).then(result => {})
 */


/**
 * @api {GET} /user/keys/:key_id getPublicKey
 * @apiName getPublicKey
 * @apiDescription View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/users/keys/#get-a-single-public-key">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {integer} key_id  
 * @apiExample {js} async/await
 * const result = await octokit.users.getPublicKey({key_id})
 * @apiExample {js} Promise
 * octokit.users.getPublicKey({key_id}).then(result => {})
 */


/**
 * @api {POST} /user/keys createPublicKey
 * @apiName createPublicKey
 * @apiDescription Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/users/keys/#create-a-public-key">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {string} [title]  A descriptive name for the new key. Use a name that will help you recognize this key in your GitHub account. For example, if you're using a personal Mac, you might call this key "Personal MacBook Air".
 * @apiParam {string} [key]  The public SSH key to add to your GitHub account. See "[Generating a new SSH key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)" for guidance on how to create a public SSH key.
 * @apiExample {js} async/await
 * const result = await octokit.users.createPublicKey({title, key})
 * @apiExample {js} Promise
 * octokit.users.createPublicKey({title, key}).then(result => {})
 */


/**
 * @api {DELETE} /user/keys/:key_id deletePublicKey
 * @apiName deletePublicKey
 * @apiDescription Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

<a href="https://developer.github.com/v3/users/keys/#delete-a-public-key">REST API doc</a>
 * @apiGroup Users
 *
 * @apiParam {integer} key_id  
 * @apiExample {js} async/await
 * const result = await octokit.users.deletePublicKey({key_id})
 * @apiExample {js} Promise
 * octokit.users.deletePublicKey({key_id}).then(result => {})
 */
