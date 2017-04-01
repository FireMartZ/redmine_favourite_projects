class FavouriteProjectsViewHooks < Redmine::Hook::ViewListener
  render_on(:view_projects_show_sidebar_bottom, :partial => "hooks/favourite_projects")
end
