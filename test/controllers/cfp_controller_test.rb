require "test_helper"

class CfpControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get cfp_home_url
    assert_response :success
  end
end
