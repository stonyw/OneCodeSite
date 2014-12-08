/**
 * DefaultController
 *
 * @description :: Server-side logic for managing defaults
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	default: function (req, res) {

		res.view("default", {
			errors    : req.flash('error')
		});
	}

};
