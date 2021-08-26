<script>
    $(document).ready(function() {
        $(".case_ready").click(function () {
            var goNext = false;

            if(logger.isTaskReached()) {
                goNext = true;
            } else {
                goNext = confirm('You did not find the solution yet. If you skip too many instructions, your participation will be useless. \n\nAre you sure you want to skip this step?');

                if(goNext) {
                    logger.log("Skipping instructions");
                }
            }

            if(!$(this).hasClass("disabled") && goNext) {
                $(this).text("Saving...").addClass("disabled");

                logger.save('<?php echo $fileName; ?>', function(response) {
                    // success
                    console.log("success");

                    if("<?php echo $type; ?>" === "briefing") {
                        $(location).attr('href', 'case.php');
                    } else if("<?php echo $type; ?>" === "training") {
                        $(location).attr('href', 'case.php');
                        //$(location).attr('href', 'https://docs.google.com/forms/d/e/1FAIpQLSdD37s8rjPXXnz93SDgqUeitk_L70fKsmnBglSyd3vccMnIRg/viewform?entry.708712105=<?php echo $formIdentifier; ?>');
                    } else if("<?php echo $type; ?>" === "testing") {
                        if("<?php echo $task["mode"]; ?>" === "some") {
                            $(location).attr('href', 'https://docs.google.com/forms/d/e/1FAIpQLSd3vftmbze3W8AXj8-iP3vII-EOXWMt_gSWFc_qQ9jK1jnqPA/viewform?entry.708712105=<?php echo $formIdentifier; ?>'); // With
                        } else if("<?php echo $task["mode"]; ?>" === "none") {
                            $(location).attr('href', 'https://docs.google.com/forms/d/e/1FAIpQLScJ2g03woJn1M4AqGEuAxMmqt9kVHTUlLZt9GX9ytgQQ-uCCA/viewform?entry.708712105=<?php echo $formIdentifier; ?>'); // Without
                        }
                    }
                }, function(response) {
                    // fail
                    alert(response);
                    console.log(response);
                    $(".case_ready").text("Done!").removeClass("disabled");
                });
            }

            return false;
        });

        $(".cancel_study").click(function() {
            var cancel = confirm('Your data will become useless. Are you sure you want to leave the experiment?');

            if(cancel) {
                logger.log("Quitting");
                logger.save('<?php echo $fileName; ?>', function(response) {
                    // Success
                    return true;
                }, function(response) {
                    return true;
                });
            } else {
                return false;
            }
        });
    });
</script>
<div class="instructions footer">
    <button class="case_ready">Next</button>
    <a class="cancel_study" href="cancel.php">Stop experiment</a>
</div>