$(function() {
    checkboxToggleSearchListPages();
    $('#action-boxdel').submit(function() {
        var checked = $('input.toggle-action:checked').not(':hidden');
        var snapinIDArray = new Array();
        for (var i = 0,len = checked.size();i < len;i++) {
            snapinIDArray[snapinIDArray.length] = checked.eq(i).prop('value');
        }
        $('input[name="snapinIDArray"]').val(snapinIDArray.join(','));
    });
});
