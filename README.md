This package fix the issue [meteor#9623](https://github.com/meteor/meteor/issues/9623) adding support to `$v`, as proposed at [meteor#9632](https://github.com/meteor/meteor/pull/9632).

It works by changing the code in `minimongo` while Meteor is running.

# Warning

This is a dirty hack, intended to be used temporarily while MDG is working on a proper solution.
For now it only patchs `minimongo` in development mode. Production is not supported, but PRs to add support it are welcome =)
