$(function() {
    // Any special functions that can be commonized for this element.
    var onCheckboxSelect = function(event) {
    };
    // ---------------------------------------------------------------
    // GENERAL TAB
    var originalName = $('#ldap').val(),
        updateName = function(newName) {
            var e = $('#pageTitle'),
                text = e.text();
            text = text.replace(': ' + originalName, ': ' + newName);
            document.title = text;
            e.text(text);
        };

    var generalForm = $('#ldap-general-form'),
        generalFormBtn = $('#general-send'),
        generalDeleteBtn = $('#general-delete');

    generalForm.on('submit',function(e) {
        e.preventDefault();
    });
    generalFormBtn.on('click',function() {
        generalFormBtn.prop('disabled', true);
        generalDeleteBtn.prop('disabled', true);
        Common.processForm(generalForm, function(err) {
            generalFormBtn.prop('disabled', false);
            generalDeleteBtn.prop('disabled', false);
            if (err) {
                return;
            }
            updateName($('#ldap').val());
            originalName = $('#ldap').val();
        });
    });
    generalDeleteBtn.on('cilck', function() {
        generalFormBtn.prop('disabled', true);
        generalDeleteBtn.prop('disabled', true);
        Common.massDelete(null, function(err) {
            if (err) {
                generalFormBtn.prop('disabled', false);
                generalDeleteBtn.prop('disabled', false);
                return;
            }
            window.location = '../management/index.php?node='
            + Common.node
            + '&sub=list';
        });
    });
});