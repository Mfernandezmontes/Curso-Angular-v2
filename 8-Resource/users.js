/**
 * Created by adminlocal on 27/03/2015.
 */

app.factory("dataResource", ["$resource", function($resource)
{
    return $resource("data.json", {} ,
        {
            getUsers:{
                method: "GET",
                isArray: true
            }
        });
}])