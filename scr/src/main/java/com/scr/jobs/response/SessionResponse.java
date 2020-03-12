package com.scr.jobs.response;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;


@Data
@EqualsAndHashCode(callSuper=false)
public class SessionResponse extends OperationResponse {
  @ApiModelProperty(required = true, value = "")
  private SessionItem item;
}
